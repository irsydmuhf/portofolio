import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Baloo_2 } from 'next/font/google'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://irsyadmuhf-portofolio.vercel.app'),
  title: 'Irsyad Muhamad Firdaus – Data Analyst',
  description:
    'Turning data into actionable insights through analytics, visualization, and thoughtful design.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#F4EBD5',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          ${baloo2.variable}
          font-sans
          antialiased
          text-foreground
          bg-background
          relative
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  )
}
