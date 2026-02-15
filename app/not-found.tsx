import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { NotFoundContent } from "@/components/ui/not-found-content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootNotFound() {
  return (
    <html lang="es">
      <body
        className={`${jakarta.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <NotFoundContent />
      </body>
    </html>
  );
}
