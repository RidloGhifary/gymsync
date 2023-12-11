import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/navigasibar/navbar'
import Footer from './components/footer/footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: 'GymSync-Center',
  description: 'hallo world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
