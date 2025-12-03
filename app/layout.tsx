import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FICS - Forensic Investigations and Consultancy Services",
  description: "Forensic Investigations and Consultancy Services (FICS Pvt. Ltd.) - ISO 9001-2015-certified Forensic Investigative and Service Agency.",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
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

