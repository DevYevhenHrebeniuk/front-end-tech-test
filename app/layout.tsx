import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const Monument = localFont({
  src: '../public/fonts/MonumentExtended-Regular.woff2',
  variable: '--monumentExtReg'
})

const SatoshiMedium = localFont({
  src: '../public/fonts/Satoshi-Medium.woff2',
  variable: '--satoshiMd'
})

const SatoshiBold = localFont({
  src: '../public/fonts/Satoshi-Bold.woff2',
  variable: '--satoshiBold'
})

const SatoshiRegular = localFont({
  src: '../public/fonts/Satoshi-Regular.woff2',
  variable: '--satoshiReg'
})

export const metadata: Metadata = {
  title: "Test front end app",
  description: "Next js app with typescript and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Monument.variable} ${SatoshiBold.variable} ${SatoshiMedium.variable} ${SatoshiRegular.variable} font-SatoshiRegular`}>{children}</body>
    </html>
  );
}
