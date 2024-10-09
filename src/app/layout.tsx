import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets:["latin", "latin-ext"]})

export const metadata: Metadata = {
  title: "Florin Venis | Personal Portfolio",
  description: "My name is Florin Venis, I'm a 19 year old, IT Instructor, Freelance Developer from Romania. With over 6 years of programming experience and numerous finished projects, I enjoy building software using the latest technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={montserrat.className}>
        <Sidebar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
