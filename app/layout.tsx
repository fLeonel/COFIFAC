import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "../app/Components/SideNav/page"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COFIDI, S.A.",
  description: "Developed for OctoSync's Soluctions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      < SideNav />
      <body className={inter.className}>
        {children}
      </body>
      {/* footer */}
    </html>
  );
}
