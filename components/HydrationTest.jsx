'use client'

export default function HydrationTest() {
  /** On the server, the below condition is true because typeof localStorage = 'undefined', therefore this client component will first render on the Server and HydrationTest.html file will be created on the server and send to the client. On the client however, the Component will again get rendered and any conditions will be checked, so the typeof localStore === 'undefined' will return false, since localStore exists on the Client, Hence for the client the below code will not run */
  if (typeof localStorage === 'undefined') {
    return (
      <div>
        <h1>Rendered on The SERVER</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus!</p>
      </div>
    )
  }
  return <div>HydrationTest | Rendered on the Client</div>
}
