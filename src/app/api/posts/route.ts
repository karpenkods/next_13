import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const query = searchParams.get('sort')

  const res = await fetch('https://dummyapi.io/data/v1/post', {
    headers: {
      'app-id': '6455b2b4bf5df73924396aeb'
    }
  })

  const { data } = await res.json()

  let currentPosts = data

  if (query) {
    currentPosts = currentPosts.filter((post: { text: string }) =>
      post.text.toLowerCase().includes(query.toLowerCase())
    )
  }

  return NextResponse.json({ currentPosts })
}
