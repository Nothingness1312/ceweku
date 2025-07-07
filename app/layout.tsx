import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monika Tersayang',
  description: 'Karin Tersayang',
  generator: 'Karin Sayang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
