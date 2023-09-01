import React from 'react'
import { NextPage } from 'next'

import { Stack, Typography } from '@mui/material'

const HomePage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Typography variant="h1">Welcome to app</Typography>
    </Stack>
  )
}

export default HomePage
