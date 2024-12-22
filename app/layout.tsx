import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Roboto, Jost} from "next/font/google";

import "./globals.css";

const roboto = Roboto (
  {
    weight: ['100','300','400','500','700','900'],
    subsets: ['latin'],
    variable: "--font-roboto"
  }
);
const jost = Jost (
  {
    weight: ['100','300','400','500','600','700','800','900'],
    subsets: ['latin'],
    variable: "--font-jost"
  }
);


export const metadata: Metadata = {
  title: "Elbrit",
  description: "elbrit landing page | assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
