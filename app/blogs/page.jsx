import Link from 'next/link'

function BlogsPage() {
  return (
    <div className="">
      <div className="py-8">
        <h1 className="text-2xl font-semibold"> Our Latest Blogs </h1>

        <p className="text-green-900 my-3">
          We write about different recipes and make life of cooks easy{' '}
          <span className="text-5xl ml-4">🥗</span>
        </p>
        {/* <div className="mt-8 flex gap-3">
          <Link
            className="text-orange-500 hover:text-orange-700 hover:underline transition-all"
            href="/blogs/1">
            Blog 1
          </Link>
          <Link
            className="text-orange-500 hover:text-orange-700 hover:underline transition-all"
            href="/blogs/2">
            Blog 2
          </Link>
          <Link
            className="text-orange-500 hover:text-orange-700 hover:underline transition-all"
            href="/blogs/3">
            Blog 3
          </Link>
        </div> */}
      </div>
    </div>
  )
}
export default BlogsPage
