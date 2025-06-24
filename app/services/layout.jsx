import Link from 'next/link'

function layout({ children }) {
  return (
    <div className="py-5 max-w-5xl mx-auto px-6 min-h-[712px]">
      <header>
        <div className="mt-8 flex gap-3 justify-between items-center">
          <div className="mt-8 flex gap-3 justify-between items-center">
            <Link
              className="text-orange-500 hover:text-orange-700 hover:underline transition-all"
              href="/services/web-dev">
              Web Dev
            </Link>
            <Link
              className="text-orange-500 hover:text-orange-700 hover:underline transition-all"
              href="/services/app-dev">
              App Dev
            </Link>
            <Link
              className="text-orange-500 hover:text-orange-700 hover:underline transition-all"
              href="/services/ui-ux">
              UI/UX
            </Link>
          </div>

          <Link href={'/services'}>
            <h1 className="font-semibold text-orange-700 hover:underline">All Services</h1>
          </Link>
        </div>
      </header>

      <main className="py-8">{children}</main>
    </div>
  )
}
export default layout
