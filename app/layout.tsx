import type { Metadata } from "next";
import { Poppins,Tajawal,Cairo_Play,Abel, Cairo } from "next/font/google";
import "./styles/globals.css";
//import localFont from 'next/font/local'

export const tajawal =Cairo ({
   subsets: ["latin"],
  weight: [ "400",],
  style:"normal",
  variable:"--font-tajawal"
  
});
//const myFont = localFont({ src: './my-font.woff2' })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "WaterMelon",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" className={`${poppins.variable} ${tajawal.variable}  `}>
      <body >{children}</body>
    </html>
  );
}
