import Link from 'next/link'

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-semibold"> EmmeiSoft Tech | All Services</h1>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            className="text-orange-500 hover:text-orange-700 transition-all"
            href="/services/web-dev">
            Web Dev
          </Link>
          <Link
            className="text-orange-500 hover:text-orange-700 transition-all"
            href="/services/app-dev">
            App Dev
          </Link>
          <Link
            className="text-orange-500 hover:text-orange-700 transition-all"
            href="/services/ui-ux">
            UI/UX
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ServicesPage
