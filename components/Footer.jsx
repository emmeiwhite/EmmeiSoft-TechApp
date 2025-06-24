import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-amber-200">
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-sm text-gray-700">
            EmmeiSoft Tech | All rights Reserved &copy; Copyright {new Date().getFullYear()}
          </h1>

          <div className="flex justify-between items-center gap-5 text-sm text-gray-700">
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
    </footer>
  )
}
export default Footer
