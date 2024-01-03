import "../globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Page",
  description: "admin page",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
