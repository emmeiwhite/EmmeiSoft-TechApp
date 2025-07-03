import FancySkeleton from '@/components/Skeleton'

export default function Loading() {
  const placeholders = Array.from({ length: 5 })

  return (
    <div className="min-h-screen py-6 max-w-5xl mx-auto px-6 space-y-4">
      {placeholders.map((_, i) => (
        <FancySkeleton key={i} />
      ))}
    </div>
  )
}
