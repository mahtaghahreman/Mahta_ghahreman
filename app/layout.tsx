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

  authors: [{ name: "Mahta Ghahreman" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "مهتا قهرمان | شاعر و ترانه‌سرا",
    description: "مجموعه شعرها، ترانه‌ها و آثار موسیقی مهتا قهرمان.",
    url: "https://mahta-ghahreman.vercel.app",
    siteName: "Mahta Ghahreman",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "/Mahta.jpg",
        width: 1200,
        height: 630,
        alt: "Mahta Ghahreman",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "مهتا قهرمان | شاعر و ترانه‌سرا",
    description: "وب‌سایت رسمی مهتا قهرمان",
    images: ["/Mahta.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "مهتا قهرمان",
    alternateName: "Mahta Ghahreman",
    url: "https://mahta-ghahreman.vercel.app",
    image: "https://mahta-ghahreman.vercel.app/Mahta.jpg",
    jobTitle: "شاعر و ترانه‌سرا",
    sameAs: [
      "https://instagram.com/mahtaghahreman",
      "https://youtube.com/@mahta.ghahreman",
    ],
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="VKWf8RZcqRNFJrW5k3gx-MLvRk4y7yI67sUtYmb31dI"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
