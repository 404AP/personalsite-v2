#!/usr/bin/env python3
"""Generate Alvan Price's two-sided, print-ready business card."""

from pathlib import Path

from PIL import Image, ImageOps
from pypdf import PdfReader, PdfWriter
from pypdf.generic import RectangleObject
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import landscape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
TMP = ROOT / "tmp" / "pdfs"
RAW_PDF = TMP / "alvan-price-business-card-raw.pdf"
FINAL_PDF = OUT / "alvan-price-business-card-print.pdf"
SO_ATLANTA_QR = ROOT / "site" / "assets" / "so-atlanta-qr-source.png"

INCH = 72
BLEED = 0.125 * INCH
TRIM_W = 3.5 * INCH
TRIM_H = 2 * INCH
PAGE_W = TRIM_W + 2 * BLEED
PAGE_H = TRIM_H + 2 * BLEED

PAPER = HexColor("#0b0e0c")
PANEL = HexColor("#111613")
INK = HexColor("#e9edeb")
MUTED = HexColor("#9aa6a0")
FAINT = HexColor("#69736e")
LINE = HexColor("#29312d")
SIGNAL = HexColor("#8dfc64")

ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"
ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
MONO = "/System/Library/Fonts/Supplemental/Courier New.ttf"
MONO_BOLD = "/System/Library/Fonts/Supplemental/Courier New Bold.ttf"


def register_fonts():
    pdfmetrics.registerFont(TTFont("AP-Sans", ARIAL))
    pdfmetrics.registerFont(TTFont("AP-Sans-Bold", ARIAL_BOLD))
    pdfmetrics.registerFont(TTFont("AP-Mono", MONO))
    pdfmetrics.registerFont(TTFont("AP-Mono-Bold", MONO_BOLD))


def background(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    c.setStrokeColor(HexColor("#152019"))
    c.setLineWidth(0.35)
    spacing = 22
    x = BLEED - spacing
    while x < PAGE_W:
        c.line(x, 0, x, PAGE_H)
        x += spacing
    y = BLEED - spacing
    while y < PAGE_H:
        c.line(0, y, PAGE_W, y)
        y += spacing


def ap_mark(c, x, y, size=31):
    c.setStrokeColor(SIGNAL)
    c.setLineWidth(0.8)
    c.rect(x, y, size, size, stroke=1, fill=0)
    c.setFillColor(SIGNAL)
    c.setFont("AP-Mono-Bold", 10.2)
    c.drawCentredString(x + size / 2, y + size / 2 - 3.5, "AP")


def tracking_text(c, text, x, y, font, size, color, tracking=1.1):
    t = c.beginText(x, y)
    t.setFont(font, size)
    t.setFillColor(color)
    t.setCharSpace(tracking)
    t.textOut(text)
    c.drawText(t)


def draw_front(c):
    background(c)
    safe_x = BLEED + 14
    safe_y = BLEED + 14

    c.setFillColor(INK)
    c.setFont("AP-Sans-Bold", 20)
    c.drawString(safe_x, 101, "Alvan Price")

    tracking_text(c, "TECHNOLOGY OPERATIONS", safe_x, 82,
                  "AP-Mono-Bold", 6.7, SIGNAL, 0.75)
    tracking_text(c, "CONSULTANT", safe_x, 70,
                  "AP-Mono", 6.7, MUTED, 0.75)

    c.setFillColor(MUTED)
    c.setFont("AP-Sans", 8.2)
    c.drawString(safe_x, 51, "I find bottlenecks, connect systems,")
    c.drawString(safe_x, 40, "and fix what gets in the way.")

    c.setStrokeColor(SIGNAL)
    c.setLineWidth(1.2)
    c.line(safe_x, safe_y, safe_x + 23, safe_y)
    tracking_text(c, "SEE  /  CONNECT  /  FIX  /  EXPLAIN", safe_x + 30, safe_y - 2,
                  "AP-Mono-Bold", 5.5, FAINT, 0.35)

    # A quiet systems-diagram motif that mirrors the site's operational panels.
    x0 = PAGE_W - BLEED - 46
    y0 = 39
    c.setStrokeColor(HexColor("#36503c"))
    c.setLineWidth(0.55)
    c.line(x0, y0, x0, y0 + 40)
    c.line(x0, y0 + 20, x0 + 22, y0 + 20)
    for dx, dy in [(0, 0), (0, 20), (0, 40), (22, 20)]:
        c.setFillColor(SIGNAL if (dx, dy) == (22, 20) else PANEL)
        c.setStrokeColor(SIGNAL if (dx, dy) == (22, 20) else HexColor("#466050"))
        c.circle(x0 + dx, y0 + dy, 2.6, stroke=1, fill=1)

    c.showPage()


def draw_qr(c, x, y, size, value):
    c.setFillColor(SIGNAL)
    c.rect(x, y, size, size, stroke=0, fill=1)
    source_qr = Image.open(SO_ATLANTA_QR).convert("RGBA")
    side = min(source_qr.size)
    left = (source_qr.width - side) // 2
    top = (source_qr.height - side) // 2
    source_qr = source_qr.crop((left, top, left + side, top + side))

    # Preserve the supplied, known-working QR exactly: white becomes transparent
    # and every dark pixel retains its original opacity against the green field.
    luminance = ImageOps.grayscale(source_qr)
    alpha = ImageOps.invert(luminance)
    transparent_qr = Image.new("RGBA", source_qr.size, (11, 14, 12, 0))
    transparent_qr.putalpha(alpha)
    c.drawImage(ImageReader(transparent_qr), x, y, width=size, height=size,
                mask="auto", preserveAspectRatio=True)


def draw_back(c):
    background(c)
    safe_x = BLEED + 14
    safe_y = BLEED + 14

    tracking_text(c, "CONTACT / 01", safe_x, PAGE_H - BLEED - 20,
                  "AP-Mono-Bold", 6.5, SIGNAL, 0.8)
    c.setFillColor(INK)
    c.setFont("AP-Sans-Bold", 13.2)
    c.drawString(safe_x, PAGE_H - BLEED - 43, "Let’s make the problem visible.")

    details = [
        ("WEB", "alvanprice.com"),
        ("EMAIL", "ap@soatlantastore.com"),
        ("PHONE", "(404) 461-9890"),
        ("BASE", "Atlanta, Georgia"),
    ]
    y = 83
    for label, value in details:
        tracking_text(c, label, safe_x, y + 1, "AP-Mono-Bold", 5.2, FAINT, 0.45)
        c.setFillColor(INK)
        c.setFont("AP-Sans", 7.6)
        c.drawString(safe_x + 39, y, value)
        y -= 16

    qr_size = 53
    qr_x = PAGE_W - BLEED - 14 - qr_size
    qr_y = safe_y + 8
    draw_qr(c, qr_x, qr_y, qr_size, "https://alvanprice.com")
    c.setFont("AP-Mono-Bold", 4.25)
    c.setFillColor(MUTED)
    c.drawCentredString(qr_x + qr_size / 2, qr_y - 10, "SCAN TO CONNECT")

    c.setStrokeColor(LINE)
    c.setLineWidth(0.55)
    c.line(safe_x, safe_y, qr_x - 12, safe_y)
    c.setFillColor(SIGNAL)
    c.circle(safe_x + 2, safe_y, 1.8, stroke=0, fill=1)
    c.showPage()


def set_print_boxes():
    reader = PdfReader(str(RAW_PDF))
    writer = PdfWriter()
    trim = RectangleObject([BLEED, BLEED, BLEED + TRIM_W, BLEED + TRIM_H])
    bleed_box = RectangleObject([0, 0, PAGE_W, PAGE_H])
    for page in reader.pages:
        page.mediabox = bleed_box
        page.bleedbox = bleed_box
        page.trimbox = trim
        page.cropbox = bleed_box
        writer.add_page(page)
    writer.add_metadata({
        "/Title": "Alvan Price Business Card",
        "/Author": "Alvan Price",
        "/Subject": "Two-sided print-ready business card with 0.125 inch bleed",
    })
    with FINAL_PDF.open("wb") as handle:
        writer.write(handle)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    TMP.mkdir(parents=True, exist_ok=True)
    register_fonts()
    c = canvas.Canvas(str(RAW_PDF), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    c.setTitle("Alvan Price Business Card")
    draw_front(c)
    draw_back(c)
    c.save()
    set_print_boxes()
    RAW_PDF.unlink(missing_ok=True)
    print(FINAL_PDF)


if __name__ == "__main__":
    main()
