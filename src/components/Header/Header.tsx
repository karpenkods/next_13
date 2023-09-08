'use client'
import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

import { IconButton, Stack } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { ALink, useAppDispatch, useAppSelector } from '@/common'
import { themeReducer } from '@/store'

import { useHeaderStyles } from './Header.styles'

export const Header: FC = () => {
  const pathname = usePathname()
  const session = useSession()

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
      <ALink
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="/"
        className={classes.headerLink}
        style={{
          color: pathname === '/' || pathname === '' ? '#1976d2' : 'white'
        }}
      >
        Home
      </ALink>
      <ALink
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="/blog"
        className={classes.headerLink}
        style={{
          color: pathname === '/blog' ? '#1976d2' : 'white'
        }}
      >
        Blog
      </ALink>
      <ALink
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="/about"
        className={classes.headerLink}
        style={{
          color: pathname === '/about' ? '#1976d2' : 'white'
        }}
      >
        About
      </ALink>
      {session.data && (
        <ALink
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          href="/profile"
          className={classes.headerLink}
          style={{
            color: pathname === '/profile' ? '#1976d2' : 'white'
          }}
        >
          Profile
        </ALink>
      )}
      {session.data ? (
        <ALink
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          href="/"
          onClick={() =>
            signOut({
              callbackUrl: '/'
            })
          }
          className={classes.headerLink}
        >
          Sign out
        </ALink>
      ) : (
        <ALink
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          href="/signin"
          className={classes.headerLink}
        >
          Sign in
        </ALink>
      )}
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
