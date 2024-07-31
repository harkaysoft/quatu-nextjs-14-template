import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Suspense } from 'react'
import Loading from './loading'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'

// export const metadata: Metadata = {
//   title: 'Quatu template Next.js 14',
//   description:
//     'Plantilla de tienda utilizando quatu como Backend, potenciado por Next.js'
// }

const shortTitle = 'Quatu template Next.js 14'
const description =
  'Plantilla de tienda utilizando quatu como Backend, potenciado por Next.js'
const tienda = ' | tienda'
const title = `${shortTitle}${tienda}`
const url = 'https://quatu.xyz/'
const imageUrl = `${url}/api/og?title=${shortTitle}&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://quatu.xyz/',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      // If you talk another language, change of yours
    >
      <body
        className={`${inter.className} selection:bg-light-primary selection:text-light-onPrimary dark:selection:bg-dark-primary dark:selection:text-dark-onPrimary`}
      >
        <Providers>
          <noscript>
            Plantilla para tiendas de quaTu realizada por @jhangmez de
            HarkaySoft
          </noscript>
          {children}
        </Providers>
      </body>
    </html>
  )
}
