import React, { FC } from 'react'

import { Stack, Typography } from '@mui/material'

export const Footer: FC = () => {
  return (
    <Stack
      direction="row"
      width="100%"
      padding="20px 0"
      justifyContent="center"
      gap="50px"
      bgcolor="indigo"
    >
      <Typography variant="h5">Какой-то футер</Typography>
    </Stack>
  )
}
