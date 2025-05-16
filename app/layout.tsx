import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ChatBot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guardian Electrónico - Seguridad las 24 horas",
  description:
    "Sistemas de seguridad completos y modernos para hogares y comercios en Resistencia, Chaco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
