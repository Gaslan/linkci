'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider, createTheme } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const theme = createTheme()

  return (
    // <>{children}</>
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
