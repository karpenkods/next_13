import React from 'react'
import { Metadata, NextPage } from 'next'
import moment from 'moment'
import 'moment/locale/ru'

import { Stack, Typography } from '@mui/material'
import { AImage } from '@/common'

async function getPost(id: string) {
  const res = await fetch(`https://dummyapi.io/data/v1/post/${id}`, {
    headers: {
      'app-id': '6455b2b4bf5df73924396aeb'
    },
    next: {
      revalidate: 60
    }
  })
  return res.json()
}

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id }
}: Props): Promise<Metadata> {
  const post = await getPost(id)

  let sliced = post.text.slice(0, 20)

  if (sliced.length < post.text.length) sliced += '...'

  return {
    title: sliced,
    description: post.text
  }
}

moment.locale('ru')

const PostPage: NextPage<Props> = async ({ params: { id } }) => {
  const post = await getPost(id)

  return (
    <Stack>
      <Typography variant="h1">{post.text}</Typography>
      <Typography variant="h1">
        {moment(post.publishDate).format('dddd DD MMM YYYY')}
      </Typography>
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
        src={post.image}
        alt=""
        width={400}
        height={300}
      />
    </Stack>
  )
}

export default PostPage
