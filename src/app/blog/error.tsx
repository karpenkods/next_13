'use client'

import React from 'react'
import { NextPage } from 'next'

import { Stack, Typography } from '@mui/material'

const ErrorPage: NextPage = ({ error }: { error?: Error }) => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h1">ERROR {error?.message}</Typography>
    </Stack>
  )
}

export default ErrorPage
