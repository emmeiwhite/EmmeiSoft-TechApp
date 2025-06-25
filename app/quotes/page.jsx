'use client'

import Comments from '@/components/Comments'
import Quote from '@/components/Quote'

function QuotesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 min-h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-semibold"> Quotes Page </h1>

        <button
          className="bg-teal-300 px-3 py-2 rounded"
          onClick={() => {
            console.log('I was clicked')
          }}>
          Click Me
        </button>
        <p className="mt-5">
          Quotes from the people of wisdom are full of wisdom, let's get ourselves acquianted with
          few quotes of wise people
        </p>

        <h2 className="text-xl my-5">Some Quotes:</h2>
        <Quote>We live in the world of abstraction</Quote>

        <p>Total Comments:</p>
        <Comments />
      </div>
    </div>
  )
}
export default QuotesPage
