import type { Metadata } from "next";
import { Poppins,Tajawal,Cairo_Play,Abel, Cairo } from "next/font/google";
import "./styles/globals.css";
import { cn } from "@/lib/utils";
//import localFont from 'next/font/local'

 const tajawal =Tajawal ({
   subsets: ["arabic","latin"],
   weight: [ "200", "300", "400", "500",  "700", "800", "900" ],
 
  variable:"--font-tajawal"
  
});
//const myFont = localFont({ src: './my-font.woff2' })
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--poppins",
// });

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
    <html lang="ar" className={`${tajawal.variable}  `}>
      <body   className={cn(
          tajawal.variable
        )}>{children}</body>
    </html>
  );
}
