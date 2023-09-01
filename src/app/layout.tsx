import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { Stack } from '@mui/material'

import { Footer, Header, Snackbar } from '@/components'
import { ProviderStore } from './providers'

import '@/styles/global.scss'

const font = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  icons: '/d.png',
  title: 'Next App',
  description: 'Generated by create next app',
  openGraph: {
    title: 'Create Next App',
    description: 'Generated by create next app',
    url: 'https://nextjs.org',
    images: ['/d.png'],
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru">
      <body className={font.className}>
        <ProviderStore>
          <Snackbar />
          <Stack
            direction="column"
            justifyContent="space-between"
            minHeight="100vh"
          >
            <Header />
            <Stack>{children}</Stack>
            <Footer />
          </Stack>
        </ProviderStore>
      </body>
    </html>
  )
}

export default RootLayout
