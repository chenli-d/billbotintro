// src/app/layout.tsx
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BillBot – AI-First Receipt Recognition",
  description:
    "BillBot transforms your receipts into structured financial data using an OCR-free AI model. Snap a photo, get insights — no manual typing required.",
  keywords: [
    "AI receipts",
    "expense tracker",
    "OCR-free",
    "Canadian receipts",
    "receipt recognition",
    "React Native",
    "Supabase",
  ],
  icons: {
    icon: "/Logo.png", // ✅ favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body className="bg-white text-gray-900 dark:bg-[#0D1117] dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
