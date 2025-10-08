// app/api/qr/route.ts
import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

export const runtime = "nodejs";

const isAllowedLinkedIn = (u: string) => {
  try {
    const { hostname, pathname, protocol } = new URL(u);
    if (protocol !== "https:") return false;
    if (!["www.linkedin.com", "linkedin.com"].includes(hostname)) return false;
    // 更严格：只允许个人页 /in/ 或公司页 /company/
    if (!pathname.startsWith("/in/") && !pathname.startsWith("/company/")) return false;
    return true;
  } catch {
    return false;
  }
};

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url") || "";
  if (!isAllowedLinkedIn(url)) {
    return NextResponse.json({ error: "Invalid LinkedIn URL" }, { status: 400 });
  }

  try {
    // 也可支持 UTM 追踪
    const withUtm = new URL(url);
    if (!withUtm.searchParams.has("utm_source")) {
      withUtm.searchParams.set("utm_source", "qr");
      withUtm.searchParams.set("utm_campaign", "team");
    }

    const png = await QRCode.toBuffer(withUtm.toString(), {
      errorCorrectionLevel: "M",
      margin: 1,
      scale: 6, // 清晰度：6≈~360–480px
    });

    // Convert Buffer to Uint8Array for NextResponse
    return new NextResponse(new Uint8Array(png), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, immutable", // 缓存一天
      },
    });
  } catch (e) {
    return NextResponse.json({ error: "QR generation failed" }, { status: 500 });
  }
}
