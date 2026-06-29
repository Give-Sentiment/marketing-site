import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sentiment — a decentralized Web3 data marketplace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/sentiment-logo-mirror.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#03020d",
          backgroundImage:
            "radial-gradient(circle at 88% 14%, rgba(99,87,229,0.45) 0%, rgba(3,2,13,0) 55%), radial-gradient(circle at 8% 100%, rgba(61,217,194,0.18) 0%, rgba(3,2,13,0) 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 56,
            padding: "0 88px",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={logoSrc} alt="" width={240} height={240} style={{ flexShrink: 0 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 88,
                fontWeight: 700,
                color: "#f7f6ff",
                letterSpacing: -2,
              }}
            >
              Sentiment
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 32,
                color: "#3dd9c2",
              }}
            >
              Verified responses. Real rewards. No bots.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 32,
                fontSize: 24,
                color: "#5c5980",
              }}
            >
              sentiment.biz
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
