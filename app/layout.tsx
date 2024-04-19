import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactQueryProvider } from "@/Utils/Providers";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
        <main>
        {children}
        </main>
        </ReactQueryProvider>
        </body>
    </html>
  );
}