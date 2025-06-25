async function Comments() {
  // Mock API call so that the components renders with a delay
  await new Promise(resolve => setTimeout(resolve, 9000))
  return <div>980 Comments</div>
}
export default Comments
