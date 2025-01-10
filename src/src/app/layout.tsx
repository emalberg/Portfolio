import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import { NavigationItem } from "@/components/navigation/types";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigationData: NavigationItem[] = [
  { type: "link", label: "Home", url: "#Home" },
  { type: "link", label: "About", url: "#About" },
  { type: "link", label: "Projects", url: "#Projects" },
  { type: "link", label: "Certs", url: "#Certs" },
  { type: "button", label: "Contact", url: "/contact", className: "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600" },
  { type: "button", label: "Subscribe", url: "/subscribe", className: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-500" },
];

export const metadata: Metadata = {
  title: "Erich Malberg | Portfolio",
  description: "Portfoilio for Erich Malberg",
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
        <Navbar navigationData={navigationData}/>
        {children}
      </body>
    </html>
  );
}
