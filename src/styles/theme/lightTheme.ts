'use client'
import { createTheme } from '@mui/material/styles'

import { stylesMui } from './common'

export const lightTheme = createTheme({
  ...stylesMui,
  palette: {
    mode: 'light',
  },
})
