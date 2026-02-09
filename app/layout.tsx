import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Irsyad Muhamad Firdaus – Data Analyst',
  description:
    'Turning data into actionable insights through analytics, visualization, and thoughtful design.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#8b5cf6', // ungu lembut (lebih playful & modern)
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          font-sans
          antialiased
          text-foreground
          bg-background
          relative
          overflow-x-hidden
        `}
      >
        {/* Subtle colorful background accent */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  )
}
