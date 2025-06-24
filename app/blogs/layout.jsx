import Link from 'next/link'

function layout({ children }) {
  return (
    <div className="py-5 max-w-5xl mx-auto px-6 min-h-[712px]">
      <header>
        <div className="flex gap-3 justify-between items-center">
          <div className="flex gap-3 justify-between items-center">
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
          </div>

          <Link href={'/blogs'}>
            <h1 className="font-semibold text-orange-700 hover:underline">All Blogs</h1>
          </Link>
        </div>
      </header>

      <main className="py-8">{children}</main>
    </div>
  )
}
export default layout
