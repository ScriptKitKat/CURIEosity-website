import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CURIEosity",
  description: "Hosting hackathons, Computer Science workshops empowering the next generation of students, especially girls. Through interactive events, CURIEosity is committed to bridge the gap in tech education and inspire young minds to launch their start-up ideas.",
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
        <Navbar /> 
        {children}
        <Footer />
      </body> 
    </html>
  );
}
