// Server Component – default in App Router

async function TodosPage() {
  const res = await fetch('https://dummyjson.com/todos')
  const data = await res.json()

  return (
    <div className="max-w-5xl mx-auto px-6 min-h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-semibold"> Todos </h1>

        <ul className="mt-4 space-y-2">
          {data.todos.map(post => (
            <li
              key={post.id}
              className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{post.todo}</h3>
              <input
                type="checkbox"
                checked={post.completed}
                readOnly
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodosPage
