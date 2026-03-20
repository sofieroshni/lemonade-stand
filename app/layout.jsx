// import Header from './components/Header'
// import { Providers } from './providers'


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header></Header>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   )
// }

import Header from './components/Header'
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header></Header>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}