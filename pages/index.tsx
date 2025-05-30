import { Geist, Geist_Mono } from "next/font/google";
import Home from "@/components/Home";
import Head from "next/head";

export const metadata = {
      title: 'Aswin M',
    };
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Homef() {
  return (
    <div>
      <Head>
        <title>Aswin</title>
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Home />
      </div>
    </div>
    )
}