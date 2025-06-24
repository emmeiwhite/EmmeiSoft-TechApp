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
