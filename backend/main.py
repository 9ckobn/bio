import html
import os
import time
from collections import defaultdict
from datetime import datetime, timezone
from typing import Optional

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

load_dotenv()

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "").strip()
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID", "").strip()

app = FastAPI(title="Bio Site Contact API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rate limiter: max 5 requests per 10 minutes per IP
RATE_LIMIT_WINDOW = 600
RATE_LIMIT_MAX_REQUESTS = 5
ip_request_history: dict[str, list[float]] = defaultdict(list)


class ContactRequest(BaseModel):
    contact: str = Field(..., min_length=2, max_length=120)
    message: str = Field(..., min_length=5, max_length=3000)
    gotcha: Optional[str] = Field(default=None, alias="_gotcha")


def get_client_ip(request: Request) -> str:
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        return forwarded.split(",")[0].strip()
    real_ip = request.headers.get("X-Real-IP")
    if real_ip:
        return real_ip.strip()
    return request.client.host if request.client else "unknown"


def is_rate_limited(ip: str) -> bool:
    now = time.time()
    timestamps = [t for t in ip_request_history[ip] if now - t < RATE_LIMIT_WINDOW]
    ip_request_history[ip] = timestamps
    if len(timestamps) >= RATE_LIMIT_MAX_REQUESTS:
        return True
    ip_request_history[ip].append(now)
    return False


async def resolve_chat_id(bot_token: str) -> Optional[str]:
    """Dynamically find chat_id from bot getUpdates if TELEGRAM_CHAT_ID is not configured."""
    global TELEGRAM_CHAT_ID
    if TELEGRAM_CHAT_ID:
        return TELEGRAM_CHAT_ID

    async with httpx.AsyncClient(timeout=10.0) as client:
        res = await client.get(f"https://api.telegram.org/bot{bot_token}/getUpdates")
        if res.status_code == 200:
            data = res.json()
            results = data.get("result", [])
            for update in reversed(results):
                msg = update.get("message") or update.get("channel_post")
                if msg and "chat" in msg:
                    chat_id = str(msg["chat"]["id"])
                    TELEGRAM_CHAT_ID = chat_id
                    return chat_id
    return None


@app.get("/api/health")
async def health():
    return {"status": "ok", "bot_configured": bool(TELEGRAM_BOT_TOKEN)}


@app.post("/api/contact")
async def send_contact(req_data: ContactRequest, request: Request):
    client_ip = get_client_ip(request)

    # 1. Honeypot check: if bot filled hidden field, return silent success
    if req_data.gotcha:
        return {"ok": True, "status": "sent"}

    # 2. Rate limiting check
    if is_rate_limited(client_ip):
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please wait a few minutes before trying again.",
        )

    # 3. Check bot token
    if not TELEGRAM_BOT_TOKEN:
        raise HTTPException(
            status_code=500,
            detail="Telegram bot is not configured on server.",
        )

    # 4. Resolve destination chat_id
    chat_id = await resolve_chat_id(TELEGRAM_BOT_TOKEN)
    if not chat_id:
        raise HTTPException(
            status_code=500,
            detail="Chat ID not found. Please send /start to the Telegram bot first.",
        )

    # 5. Format message
    now_utc = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    contact_escaped = html.escape(req_data.contact)
    message_escaped = html.escape(req_data.message)

    text = (
        f"📩 <b>Новое сообщение с сайта</b>\n\n"
        f"👤 <b>Контакт:</b> <code>{contact_escaped}</code>\n"
        f"💬 <b>Сообщение:</b>\n{message_escaped}\n\n"
        f"🕒 <i>{now_utc}</i>\n"
        f"🌐 <i>IP: {client_ip}</i>"
    )

    # 6. Send to Telegram
    async with httpx.AsyncClient(timeout=10.0) as client:
        tg_url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        payload = {
            "chat_id": chat_id,
            "text": text,
            "parse_mode": "HTML",
            "disable_web_page_preview": True,
        }
        res = await client.post(tg_url, json=payload)
        if res.status_code != 200:
            error_detail = res.text
            raise HTTPException(
                status_code=502,
                detail=f"Telegram API error: {error_detail}",
            )

    return {"ok": True, "status": "sent"}
