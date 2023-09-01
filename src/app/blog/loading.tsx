import React from 'react'
import { NextPage } from 'next'

import { Stack, Typography } from '@mui/material'

const LoadingPosts: NextPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h1">Loading...</Typography>
    </Stack>
  )
}

export default LoadingPosts
