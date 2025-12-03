import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prospect - Built for Fast-Moving Businesses",
  description: "Prospect surfaces what matters, automates the rest, and keeps you moving with intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

