import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ByteStore',
  description: 'Build and serve Java artifacts from GitHub repositories with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <Toaster />
      </body>

    </html>
  )
}