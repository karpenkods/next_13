import React from 'react'
import { Metadata, NextPage } from 'next'
import { getServerSession } from 'next-auth/next'
import Image from 'next/image'

import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'

import { authConfig } from '@/configs/auth'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile page'
}

const ProfilePage: NextPage = async () => {
  const session = await getServerSession(authConfig)

  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h1">Profile</Typography>
      <Stack direction="row" alignItems="center" gap="50px">
        <Image
          src={session?.user?.image ?? ''}
          alt="user"
          width={100}
          height={100}
        />
        <Stack direction="column" gap="30px">
          <Typography variant="h5">Email: {session?.user?.email}</Typography>
          <Typography variant="h5">Name: {session?.user?.name}</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ProfilePage
