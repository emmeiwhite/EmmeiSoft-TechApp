'use client'

import { useState } from 'react'

function Likes() {
  // Mock API call so that the components renders with a delay
  //   await new Promise(resolve => setTimeout(resolve, 6000))

  const [likes, setLikes] = useState(0)

  const handleClick = () => {
    setLikes(prev => prev + 1)
  }
  return (
    <div>
      <div>
        <p
          className="inline-block text-2xl cursor-pointer"
          onClick={handleClick}>
          👍
        </p>
        <p>{likes} Likes</p>
      </div>
    </div>
  )
}
export default Likes
