'use client'
import { createTheme } from '@mui/material/styles'

import { stylesMui } from './common'

export const darkTheme = createTheme({
  ...stylesMui,
  palette: {
    mode: 'dark',
  },
})
