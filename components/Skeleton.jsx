// components/Skeleton.js

// export default function Skeleton() {
//   return (
//     <div className="animate-pulse">
//       <div className="h-6 bg-gray-300 rounded w-1/4"></div>
//       {/* <div className="h-4 bg-gray-300 rounded w-1/3"></div> */}
//     </div>
//   )
// }

export default function FancySkeleton() {
  return (
    <div className="animate-pulse flex items-center space-x-4">
      <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  )
}
