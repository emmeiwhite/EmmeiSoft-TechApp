import Link from 'next/link'

function Header() {
  return (
    <header className="bg-amber-200">
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex justify-between items-center py-2">
          <Link href={'/'}>
            <h1 className="text-xl font-semibold text-teal-700">EmmeiSoft</h1>
          </Link>

          <div className="flex justify-between items-center gap-5 wrap text-sm">
            <Link
              href={'/'}
              className="hover:text-amber-600">
              Home
            </Link>
            <Link
              href={'/about'}
              className="hover:text-amber-600">
              About
            </Link>
            <Link
              href={'/services'}
              className="hover:text-amber-600">
              Services
            </Link>

            <Link
              href={'/blogs'}
              className="hover:text-amber-600">
              Blogs
            </Link>

            <Link
              href={'/quotes'}
              className="hover:text-amber-600">
              Quotes
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
