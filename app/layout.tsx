import type { Metadata } from "next";
import { Peralta } from "next/font/google";
import "./globals.css";

const font = Peralta({ weight: "400", subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Corninator | Funny Jokes",
  description:
    "Ever needed funny jokes to make you look cool at parties? Search no more!",
  creator: "Jared Asuncion",
  applicationName: "Corninator",
  keywords: ["Corninator", "jokes", "funny jokes"],
  authors: [{ name: "Jared Guissmo Asuncion", url: "https://guissmo.com" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.png",
    },
  },
  openGraph: {
    title: "Corninator | Funny Jokes",
    description:
      "Ever needed funny jokes to make you look cool at parties? Search no more!",
    url: "https://jokes.guissmo.com",
    siteName: "Corninator",
    images: [
      {
        url: "/corninator-og-image.png",
        width: 745,
        height: 745,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corninator | Funny Jokes",
    description:
      "Ever needed funny jokes to make you look cool at parties? Search no more!",
    images: ["/corninator-og-image.png"],
  },
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
