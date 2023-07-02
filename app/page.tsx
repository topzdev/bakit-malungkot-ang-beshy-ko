import Content from "@/components/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ba't 🤸 Malungkot 🤸 Ang 🤸 Beshy 🤸 Ko 🤸 Generator",
  description:
    "This help pinoy memer to generate a text with a Cartwheel Emoji(🤸) between each word",

  icons: {
    icon: "/icon.png",
  },
};

export default function Home() {
  return <Content />;
}
