import HydrationTest from '@/components/HydrationTest'
import Share from '@/components/Share'

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 min-h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-semibold"> About Page </h1>
        <p className="mt-5">
          We are a leading online training platform for Software Development. We make sure you
          learn, implement, and grow with each training session to fulfil your dream of becoming a
          ProCoder
        </p>

        <Share />

        <HydrationTest />
      </div>
    </div>
  )
}
export default AboutPage
