import './globals.css'
import { Roboto } from 'next/font/google'
import { PropsWithChildren } from 'react'

const roboto = Roboto({
  weight: '700',
  subsets: [ 'latin' ]
})

export const metadata = {
  title: 'Simple calculator',
  description: 'Just a simple calculator to learn various React concepts',
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}
