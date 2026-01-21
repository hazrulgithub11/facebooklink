import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Read Later",
  description: "Curated reading list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
