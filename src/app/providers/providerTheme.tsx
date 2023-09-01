'use client'
import React, { FC, ReactNode } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useMediaQuery } from '@mui/material'

import { themeReducer } from '@/store'
import { useAppDispatch, useAppSelector } from '@/common'
import { darkTheme, lightTheme } from '@/styles/theme'

interface ProviderThemeProps {
  children: ReactNode
}

export const ProviderTheme: FC<ProviderThemeProps> = ({
  children,
}: {
  children: ReactNode
}) => {
  const dispatch = useAppDispatch()

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const themePersist = useAppSelector((store) => store.theme.theme)

  if (!themePersist.length) {
    dispatch(themeReducer(prefersDarkMode ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={themePersist === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
