import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Melhores Casinos Online Portugal 2025 | Sites de Casino Mais Bem Avaliados",
  description:
    "Descubra os melhores casinos online em Portugal para 2025. Compare bónus, avaliações e funcionalidades dos sites de casino mais bem avaliados. Operadores licenciados com saques rápidos e suporte 24/7.",
  keywords:
    "Casinos Online Portugal, melhores sites de casino, bónus de casino, jogo português, slots online, casino ao vivo",
  authors: [{ name: "Melhores Casinos Portugal" }],
  robots: "index, follow",
  openGraph: {
    title: "Melhores Casinos Online Portugal 2025",
    description: "Encontre os casinos online mais bem avaliados em Portugal com bónus exclusivos e saques rápidos.",
    type: "website",
    locale: "pt_PT",
    siteName: "Melhores Casinos Portugal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Casinos Online Portugal 2025",
    description: "Descubra sites de casino portugueses mais bem avaliados com bónus exclusivos.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="PT" />
        <meta name="geo.country" content="Portugal" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
