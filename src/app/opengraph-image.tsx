import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#03020d",
          color: "#f7f6ff",
          fontSize: 72,
          fontWeight: 600,
        }}
      >
        <div style={{ display: "flex" }}>Sentiment</div>
        <div style={{ display: "flex", fontSize: 28, color: "#6357e5", marginTop: 16 }}>
          Powered by the Reality protocol
        </div>
      </div>
    ),
    { ...size }
  );
}
