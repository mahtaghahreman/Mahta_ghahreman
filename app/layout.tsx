import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title: "مهتا قهرمان | شاعر و ترانه‌سرا",

  description:
    "وب‌سایت رسمی مهتا قهرمان، شامل شعرها، ترانه‌ها و آثار موسیقی.",

  keywords: [
    "مهتا قهرمان",
    "Mahta Ghahreman",
    "شعر",
    "ترانه",
    "آهنگ",
    "موسیقی"
  ],

  authors: [
    {
      name: "Mahta Ghahreman",
    },
  ],

  openGraph: {

    title: "مهتا قهرمان | شاعر و ترانه‌سرا",

    description:
      "مجموعه شعرها، ترانه‌ها و آثار موسیقی مهتا قهرمان.",

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

      </head>


      <body>

        {children}

      </body>


    </html>

  );

}
