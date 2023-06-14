import './globals.css'
import {Inter} from 'next/font/google'
import styles from './layout.module.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Coffee connoisseur',
    description: 'Next.js training app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={styles.container}>
            {children}
            <footer>

            </footer>
        </div>
        </body>
        </html>
    )
}
