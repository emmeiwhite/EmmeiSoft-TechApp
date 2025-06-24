import './globals.css'

export const metadata = {
  title: 'emmeisoft-education-platform',
  description: 'Your one time stop for exploration bit by bit'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>MAIN APP HEADER</header>
        {children}
        <footer>MAIN APP FOOTER</footer>
      </body>
    </html>
  )
}
