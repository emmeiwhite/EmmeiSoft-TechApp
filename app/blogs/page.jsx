import Comments from '@/components/Comments'
import Likes from '@/components/Likes'
import Views from '@/components/Views'

async function BlogsPage() {
  return (
    <div className="">
      <div className="py-8">
        <h1 className="text-2xl font-semibold"> Our Latest Blogs </h1>

        <p className="text-green-900 my-3">
          We write about different recipes and make life of cooks easy{' '}
          <span className="text-5xl ml-4">🥗</span>
        </p>

        <div>
          <h1 className="text-2xl font-semibold my-5">User Engagement</h1>
          <div className="flex flex-col gap-2">
            {/* I am rendering Views Components which Makes a dummy API call, I expect the whole page to not render until 3s */}
            <Views />
            <Comments />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogsPage
