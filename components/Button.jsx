'use client'

export default function Button() {
  return (
    <button
      className="bg-teal-300 px-3 py-2 rounded"
      onClick={() => {
        console.log('I was clicked')
      }}>
      Click Me
    </button>
  )
}
