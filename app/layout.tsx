import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FICS - Forensic Investigations and Consultancy Services",
  description: "Forensic Investigations and Consultancy Services (FICS Pvt. Ltd.) - ISO 9001-2015-certified Forensic Investigative and Service Agency. Expert forensic services designed for your business success.",
  keywords: ["forensic investigations", "forensic consultancy", "cybersecurity", "digital forensics", "fraud investigation", "ISO 9001", "forensic services India"],
  authors: [{ name: "FICS Pvt. Ltd." }],
  creator: "FICS - Forensic Investigations and Consultancy Services",
  publisher: "FICS Pvt. Ltd.",
  metadataBase: new URL('https://forensicservicesindia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FICS - Forensic Investigations and Consultancy Services",
    description: "ISO 9001-2015-certified Forensic Investigative and Service Agency. Expert forensic services designed for your business success. Specializing in cybersecurity, digital forensics, and fraud investigations.",
    url: 'https://forensicservicesindia.com',
    siteName: 'FICS - Forensic Investigations and Consultancy Services',
    images: [
      {
        url: 'https://forensicservicesindia.com/assets/images/ficslogo.png',
        width: 1200,
        height: 630,
        alt: 'FICS - Forensic Investigations and Consultancy Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FICS - Forensic Investigations and Consultancy Services",
    description: "ISO 9001-2015-certified Forensic Investigative and Service Agency. Expert forensic services designed for your business success.",
    images: ['https://forensicservicesindia.com/assets/images/ficslogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

