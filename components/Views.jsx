'use client'

import { useState } from 'react'

export default function Views() {
  // Mock API call so that the components renders with a delay
  //   await new Promise(resolve => setTimeout(resolve, 3000))

  const [views, setViews] = useState(0)
  return <div>{views} Views</div>
}
