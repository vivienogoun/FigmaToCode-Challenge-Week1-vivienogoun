import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Doctor+ Medical Landing Page",
  description: "Figma To Code Challenge Week 1 by Vivien Ogoun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-fit sm:w-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
