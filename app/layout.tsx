import type { Metadata } from "next";
import "./globals.css";
import { bloklettersBalpen } from "./fonts";

export const metadata: Metadata = {
  title: "Julia's Fanpage",
  description: "A page showing that I love my gf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bloklettersBalpen.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
