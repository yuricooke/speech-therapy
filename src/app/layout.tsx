import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tatiana Cooke Munkes - Multilingual Speech Language Therapist",
  description: "Professional multilingual speech language therapy services in Hamburg, Germany. Offering assessment, therapy and counseling in German, Portuguese and English.",
  keywords: ["speech therapy", "multilingual", "Hamburg", "German", "Portuguese", "English", "language therapy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Droid+Serif:wght@400;700&family=Bree+Serif&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
