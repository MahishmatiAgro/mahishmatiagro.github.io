"""Optimise the three studio packshots based on the owner's actual jar photos.

Masters: ../media/product-photos/mushroom-powder/ (see SOURCES below).
Requires Playwright and installed Chrome. No running web server is needed.
"""
import base64
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
MASTERS = ROOT.parent / "media/product-photos/mushroom-powder"
SOURCES = {
    "front": MASTERS / "packshot-actual-jar-v1.png",
    "left": MASTERS / "packshot-actual-jar-left-v1.png",
    "right": MASTERS / "packshot-actual-jar-right-v1.png",
}


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="chrome", headless=True)
        page = browser.new_page()
        for view, source in SOURCES.items():
            mime = "image/png" if source.suffix == ".png" else "image/jpeg"
            data = f"data:{mime};base64," + base64.b64encode(source.read_bytes()).decode()
            result = page.evaluate(
                """async data => {
                    const image = new Image();
                    image.src = data;
                    await image.decode();
                    const canvas = document.createElement('canvas');
                    canvas.width = 1200;
                    canvas.height = 1200;
                    const context = canvas.getContext('2d');
                    context.fillStyle = '#ffffff';
                    context.fillRect(0, 0, 1200, 1200);
                    context.imageSmoothingQuality = 'high';
                    const scale = Math.min(1120 / image.width, 1120 / image.height);
                    const w = image.width * scale;
                    const h = image.height * scale;
                    context.drawImage(image, (1200 - w) / 2, (1200 - h) / 2, w, h);
                    return canvas.toDataURL('image/webp', .94).split(',')[1];
                }""",
                data,
            )
            output = ROOT / f"assets/img/products/mushroom-powder-{view}.webp"
            output.write_bytes(base64.b64decode(result))
            print(output.name, round(output.stat().st_size / 1024), "KB")
        browser.close()


if __name__ == "__main__":
    main()
