'use client'
import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Stack } from '@mui/material'
import { useHeaderStyles } from './Header.styles'

export const Header: FC = () => {
  const pathname = usePathname()

  const classes = useHeaderStyles()

  return (
    <Stack
      direction="row"
      width="100%"
      padding="30px 0"
      justifyContent="center"
      gap="50px"
      bgcolor="indigo"
    >
      <Link
        href="/"
        className={classes.headerLink}
        style={{
          color: pathname === '/' || pathname === '' ? '#1976d2' : 'white',
        }}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={classes.headerLink}
        style={{
          color: pathname === '/blog' ? '#1976d2' : 'white',
        }}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={classes.headerLink}
        style={{
          color: pathname === '/about' ? '#1976d2' : 'white',
        }}
      >
        About
      </Link>
    </Stack>
  )
}
