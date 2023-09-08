import React from 'react'
import { NextPage } from 'next'

import { Stack, Typography } from '@mui/material'

import { GoogleButton, SigninForm } from '@/components'

const SignInPage: NextPage = async () => {
  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h1">Sign In</Typography>
      <GoogleButton />
      <div style={{ margin: '20px 0' }}> or </div>
      <SigninForm />
    </Stack>
  )
}

export default SignInPage
