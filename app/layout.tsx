import type { Metadata } from "next";
import { Peralta } from "next/font/google";
import "./globals.css";

const font = Peralta({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corninator 3000",
  description: "Jokes that will make you cool.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
