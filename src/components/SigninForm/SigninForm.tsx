'use client'
import React, { FC, FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import Button from '@mui/material/Button'

export const SigninForm: FC = () => {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: false
    })

    if (res && !res.error) {
      router.push('/profile')
    } else {
      console.log(res)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
    >
      <input
        type="email"
        name="email"
        required
        style={{ padding: '10px 20px', borderRadius: '5px' }}
      />
      <input
        type="password"
        name="password"
        required
        style={{ padding: '10px 20px', borderRadius: '5px' }}
      />
      <Button variant="contained" color="secondary" type="submit">
        Sign in
      </Button>
    </form>
  )
}
