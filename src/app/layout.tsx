import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppcontextProvider } from "../context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NBA Stats",
  description: "NBA Stats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppcontextProvider>
          {children}
        </AppcontextProvider>
      </body>
    </html>
  );
}
