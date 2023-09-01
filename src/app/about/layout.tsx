import React, { ReactNode } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import { Stack } from '@mui/material'

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
}

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack>
      <Link href="/about/team">Team</Link>
      <Link href="/about/contacts">Contacts</Link>
      {children}
    </Stack>
  )
}

export default AboutLayout
