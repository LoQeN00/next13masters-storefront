import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/ui/organisms/Navbar";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Next13Masters Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Navbar />
        <section className="max-w-8xl mx-auto p-12">{children}</section>
        <Footer />
      </body>
    </html>
  );
}

export { metadata };
