'use client'
import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { IconButton, Stack } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { useAppDispatch, useAppSelector } from '@/common'

import { useHeaderStyles } from './Header.styles'
import { themeReducer } from '@/store'

export const Header: FC = () => {
  const pathname = usePathname()

  const dispatch = useAppDispatch()

  const theme = useAppSelector((store) => store.theme.theme)

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
      <IconButton
        onClick={() =>
          dispatch(themeReducer(theme === 'dark' ? 'light' : 'dark'))
        }
      >
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon color="error" />}
      </IconButton>
    </Stack>
  )
}
