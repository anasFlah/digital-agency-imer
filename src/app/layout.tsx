import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rayo - Digital Agency & Personal Portfolio',
  description: 'Elevate your digital presence with Rayo - dynamic and stylish template designed for creative agencies and personal brands.',
  keywords: 'mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean',
  authors: [{ name: 'mix_design' }],
  openGraph: {
    title: 'Rayo - Digital Agency & Personal Portfolio',
    description: 'Elevate your digital presence with Rayo - dynamic and stylish template designed for creative agencies and personal brands.',
    url: 'https://your-domain.com',
    siteName: 'Rayo',
    images: [
      {
        url: '/img/og-image.html',
        width: 1200,
        height: 1200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayo - Digital Agency & Personal Portfolio',
    description: 'Elevate your digital presence with Rayo - dynamic and stylish template designed for creative agencies and personal brands.',
    images: ['/img/og-image.html'],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF7F6' },
    { media: '(prefers-color-scheme: dark)', color: '#161616' },
  ],
  manifest: '/img/favicon/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/img/favicon/favicon.ico', sizes: 'any' },
      { url: '/img/favicon/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/img/favicon/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="stylesheet" type="text/css" href="/css/loaders/loader.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/plugins.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        <script src="/js/libs.min.js"></script>
        <script src="/js/app.min.js"></script>
      </body>
    </html>
  )
}
