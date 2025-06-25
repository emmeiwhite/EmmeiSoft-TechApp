// 'use client'

export default function Share() {
  /** To avoid the error on the server we do */
  if (typeof window !== 'undefined') {
    console.log(window) // On the Server still we'll get the error that window is not defined but the code is shipped to the Client wisely by Next.js
  }
  return (
    <div className="mt-5">
      <span className="bg-amber-500 px-2 py-1 cursor-pointer text-blue-700">Share ⤴️</span>

      <button
        onClick={() => {
          console.log('Life is sorted with client components')
        }}>
        Purchase 🚀
      </button>
    </div>
  )
}

// Server Components render only on the server
// Client Components render on Server as well as the Client
// with "use client" directive, we createt a Client Component
/**
 * 1. We access Browser Resources by making a component a Client Component
 */
