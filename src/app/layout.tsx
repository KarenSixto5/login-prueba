import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bankaool | Iniciar sesión",
  description: "Ingresa tus datos para iniciar sesión en Bankaool.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${figtree.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black">{children}</body>
    </html>
  );
}
