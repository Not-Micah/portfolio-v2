import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SideBar from "./components/SideBar";
import SocialBar from "./components/SocialBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micah Dev",
  description: "Hi! I'm Micah! A 17 year old interested in web-development. Come checkout some of my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SideBar />
        <SocialBar />
      </body>
    </html>
  );
}
