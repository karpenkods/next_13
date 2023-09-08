'use client'
import React, { FC } from 'react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

import Button from '@mui/material/Button'

export const GoogleButton: FC = () => {
  const searchParam = useSearchParams()
  const callbackUrl = searchParam.get('callbackUrl') || '/profile'

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() =>
        signIn('google', {
          callbackUrl
        })
      }
    >
      Sign in with Google
    </Button>
  )
}
