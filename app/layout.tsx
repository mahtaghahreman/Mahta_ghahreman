import "./globals.css";

export const metadata = {
  title: "Mahta Ghahreman | Official Website",
  description: "هر ترانه، تکه‌ای از یک زندگی...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
