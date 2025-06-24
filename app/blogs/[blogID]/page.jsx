/** Static Site Generation:
  In our Next.JS application, we can generate dynamic pages on build time as well for special cases such as Dynamically Generated Blogs, Which usually in normal circumstances are generated at run-time as per the slug.

  But for Blog pages usually the content for each Blog usually stays the same. And here is when we can make use of a concept called Static Site Generation. Now on build time itself our Blog pages will get generated.
  
  It improves performance of the application. Since we can interact with all our blogs as if we are using SPA, all the Blogs gets pre-rendered.
 */

/* ---
export function generateStaticParams() {
  return [({ blogID: '1' }, { blogID: '2' }, { blogID: '3' }, { blogID: '4' }, { blogID: '5' })]
}
   --- */

const url = 'https://dummyjson.com/posts'

export async function generateStaticParams() {
  const response = await fetch(url)
  const { posts } = await response.json()

  return posts.map(post => ({
    blogID: `${post.id}`
  }))
}

export default async function SingleBlog({ params }) {
  const { blogID } = await params
  return (
    <div className="">
      <div className="py-8">
        <h1 className="text-2xl font-semibold mb-6"> Blog Page</h1>

        <p>
          Blog with id <span className="font-bold">{blogID}</span>
        </p>
      </div>
    </div>
  )
}
