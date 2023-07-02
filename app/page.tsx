import Content from "@/components/Content";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Ba't 🤸 Malungkot 🤸 Ang 🤸 Beshy 🤸 Ko 🤸 Text 🤸 Generator",
  description:
    "This app helps Pinoy memers generate a text with a Cartwheel Emoji (🤸) inserted between each word.",

  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/seo-image.jpg",
  },
};

export default function Home() {
  return <Content />;
}
