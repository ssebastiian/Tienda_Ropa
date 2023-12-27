import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Tienda Ropa - Home',
  description: 'Tienda Ropa - Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
};
