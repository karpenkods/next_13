'use client'
import React, { useCallback } from 'react'
import { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation'

import { Stack, Typography, Button } from '@mui/material'

import { AImage, useAppDispatch } from '@/common'
import { pushWarningNotification } from '@/store'
import Picture from '../../../public/62-20211112_171057-883x600.jpg'

const AboutPage: NextPage = () => {
  const router = useRouter()
  const query = useSearchParams()!

  const dispatch = useAppDispatch()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(query)
      params.set(name, value)

      return params.toString()
    },
    [query]
  )

  const handleClick = () => {
    router.push('/about' + '?' + createQueryString('name', '22'))
    dispatch(pushWarningNotification('Добавить параметры в адресную строку'))
  }

  return (
    <Stack alignItems="center">
      <Typography variant="h1">About</Typography>
      <Typography variant="h2">
        About sdfgsrgdsrg srgsgrsgs sgsgsgsgsg sgsgsgsgsgsgsg swgsg
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Нажать
      </Button>
      <AImage
        initial={{
          filter: 'blur(100px)',
          opacity: 0
        }}
        animate={{
          filter: 'blur(0px)',
          opacity: 1,
          transition: { duration: 1 }
        }}
        src={Picture}
        alt=""
      />
    </Stack>
  )
}

export default AboutPage
