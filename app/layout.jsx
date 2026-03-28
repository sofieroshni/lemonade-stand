import Header from './components/Header'
import Footer from './components/Footer'
import { Providers } from './providers'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <Header></Header>
          {children}
<Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
//  /**** LINKE 9-16 taget direkte ind i chat pga. min kode ikke virkede.
// Derfor er supressHydrationWarning sat ind. Hydration er når react forbinder server-renderet Html med client js. prop ign. warnin */