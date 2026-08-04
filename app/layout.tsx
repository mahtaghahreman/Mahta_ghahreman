import "./globals.css";

export const metadata = {
  title: "Mahta Ghahreman",
  description: "Official Website of Mahta Ghahreman",
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
