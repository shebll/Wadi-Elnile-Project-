import './globals.css'
import Header from "@/components/header";
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'

const inter = Cairo({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'BlOGS',
  description: 'personal blogs website && show and share project',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
