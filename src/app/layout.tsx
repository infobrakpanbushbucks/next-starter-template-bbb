import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/css/custom.css";
import "../../public/css/responsive.css";
import "../../public/css/color.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/fontawesome.css";
import "../../public/css/owl.carousel.min.css";
import "../../public/css/prettyPhoto.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brakpan Bush Bucks",
  description: "The Best Brakpan Football Club",
  authors: [{ name: "BBB Team", url: "https://www.brakpanbushbucks.co.za" }],
  viewport:"width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
