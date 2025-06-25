async function Likes() {
  // Mock API call so that the components renders with a delay
  await new Promise(resolve => setTimeout(resolve, 6000))
  return <div>3k Likes</div>
}
export default Likes
