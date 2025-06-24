import Link from 'next/link'

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-semibold mb-8"> EmmeiSoft Tech | All Services</h1>

        <p>
          We offer services in the area of website development, UI/UX, and mobile app developerment.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit nemo ipsa.
          Quo neque esse voluptate ex accusamus laborum magni, doloremque alias corporis, soluta
          culpa ea architecto explicabo tenetur dolor veritatis? Ab omnis natus atque minima itaque
          quae iste enim!
        </p>
        {/* <div className="mt-8 flex flex-col gap-3">
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
        </div> */}
      </div>
    </div>
  )
}
export default ServicesPage
