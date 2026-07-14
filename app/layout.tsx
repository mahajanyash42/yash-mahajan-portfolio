import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";


export const metadata: Metadata = {
  title: "Yash Mahajan | Data Scientist & AI/ML Engineer",
  description: "Portfolio of Yash Mahajan — Data Scientist and AI/ML Engineer building intelligent systems, data products, and reliable AI applications.",
  openGraph: {
    title: "Yash Mahajan | Data Scientist & AI/ML Engineer",
    description: "Intelligent systems, data products, and reliable AI applications.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
