import Link from 'next/link'

function Header() {
  return (
    <header className="bg-amber-200">
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex justify-between items-center py-2">
          <Link href={'/'}>
            <h1 className="text-2xl font-semibold text-teal-700">EmmeiSoft Tech</h1>
          </Link>

          <div className="flex justify-between items-center gap-5">
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
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
