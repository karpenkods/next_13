import React from 'react'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'

import { Stack, Typography } from '@mui/material'

async function getPosts() {
  const res = await fetch('https://dummyapi.io/data/v1/post', {
    headers: {
      'app-id': '6455b2b4bf5df73924396aeb',
    },
    next: {
      revalidate: 60,
    },
  })

  if (!res.ok) throw new Error('Error fetching posts')

  return res.json()
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog page',
}

const BlogPage: NextPage = async () => {
  const posts = await getPosts()

  return (
    <Stack alignItems="center">
      <Typography variant="h1">Blog</Typography>
      {posts.data.map((post: any) => (
        <Stack key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.text}</Link>
        </Stack>
      ))}
      <Typography variant="h5" margin="50px 0">
        {posts.total}
      </Typography>
    </Stack>
  )
}

export default BlogPage
