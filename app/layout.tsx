import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahta-ghahreman.vercel.app"),

  title: "مهتا قهرمان | شاعر و ترانه‌سرا",

  description:
    "وب‌سایت رسمی مهتا قهرمان، شامل شعرها، ترانه‌ها و آثار موسیقی.",

  keywords: [
    "مهتا قهرمان",
    "Mahta Ghahreman",
    "شاعر",
    "ترانه‌سرا",
    "شعر",
    "ترانه",
    "آهنگ",
    "موسیقی",
  ],

  authors: [
    {
      name: "Mahta Ghahreman",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "مهتا قهرمان | شاعر و ترانه‌سرا",

    description:
      "مجموعه شعرها، ترانه‌ها و آثار موسیقی مهتا قهرمان.",

    url: "https://mahta-ghahreman.vercel.app",

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
