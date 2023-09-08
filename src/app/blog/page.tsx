import React from 'react'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'

import { Stack, Typography } from '@mui/material'

async function getPosts() {
  // const res = await fetch('http://localhost:3000/api/posts?sort=husky')

  const res = await fetch('/api/posts')

  if (!res.ok) throw new Error('Error fetching posts')

  return res.json()
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog page'
}

const BlogPage: NextPage = async () => {
  const { currentPosts: posts } = await getPosts()

  return (
    <Stack alignItems="center">
      <Typography variant="h1">Blog</Typography>
      {posts.map((post: any) => (
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
