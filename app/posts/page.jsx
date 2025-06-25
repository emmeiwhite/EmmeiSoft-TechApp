'use client'

import { useEffect, useState } from 'react'

function PostsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://dummyjson.com/posts')
      const data = await res.json()
      setPosts(data.posts)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6 min-h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-semibold"> Latest Posts </h1>
        {loading ? (
          <p className="text-gray-600">Loading posts...</p>
        ) : (
          <ul className="mt-4 space-y-2 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <li
                key={post.id}
                className="border p-4 rounded shadow">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-700">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default PostsPage
