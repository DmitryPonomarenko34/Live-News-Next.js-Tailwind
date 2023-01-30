import '../styles/globals.css'
import Header from './Header'
import SearchBox from './SearchBox'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-600'>
        <Header />
        {children}
      </body>
    </html>
  )
}
