import type { Metadata } from "next";

import "./globals.css";


import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Screeno",
  description: "Traveling App",
  icons:"/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       
        <main className="relative overflow-hidden">
        {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}