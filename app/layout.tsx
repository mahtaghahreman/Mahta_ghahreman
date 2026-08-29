import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mahta-ghahreman.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "مهتا قهرمان | شاعر و ترانه‌سرا",
    template: "%s | مهتا قهرمان",
  },

  description:
    "وب‌سایت رسمی مهتا قهرمان، شاعر و ترانه‌سرا؛ مجموعه‌ای از شعرها، ترانه‌ها و آثار موسیقی.",

  keywords: [
    "مهتا قهرمان",
    "Mahta Ghahreman",
    "شاعر مهتا قهرمان",
    "ترانه‌سرای مهتا قهرمان",
    "شعر مهتا قهرمان",
    "ترانه مهتا قهرمان",
    "آهنگ مهتا قهرمان",
    "شعر",
    "ترانه",
    "موسیقی",
  ],

  authors: [
    {
      name: "Mahta Ghahreman",
    },
  ],

  creator: "Mahta Ghahreman",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "مهتا قهرمان | شاعر و ترانه‌سرا",

    description:
      "وب‌سایت رسمی مهتا قهرمان؛ مجموعه شعرها، ترانه‌ها و آثار موسیقی.",

    url: siteUrl,

    siteName: "Mahta Ghahreman",

    type: "website",

    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="VKWf8RZcqRNFJrW5k3gx-MLvRk4y7yI67sUtYmb31dI"
        />

        <meta
          name="msvalidate.01"
          content="EE15D89A799A97431D92E3DC3B48C4CE"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
