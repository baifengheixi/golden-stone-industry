import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Golden Stone Industry | บริษัท โกลเด้น สโตน อินดัสทรี จำกัด",
    template: "%s | Golden Stone Industry",
  },
  description:
    "บริษัท โกลเด้น สโตน อินดัสทรี จำกัด - ผู้ให้บริการด้านการจัดซื้อจัดจ้าง จัดหา และจัดจำหน่ายสินค้าแก่หน่วยงานภาครัฐและเอกชน",
  keywords: [
    "Golden Stone Industry", "โกลเด้น สโตน อินดัสทรี", "จัดซื้อจัดจ้าง",
    "procurement", "รถดับเพลิง", "fire truck", "โดรน", "drone",
    "หุ่นยนต์", "robot", "anti-drone", "นนทบุรี", "Nonthaburi",
  ],
  openGraph: {
    type: "website", locale: "th_TH", siteName: "Golden Stone Industry Co., Ltd.",
    title: "Golden Stone Industry | บริษัท โกลเด้น สโตน อินดัสทรี จำกัด",
    description: "ผู้ให้บริการด้านการจัดซื้อจัดจ้างสำหรับภาครัฐและเอกชน",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
