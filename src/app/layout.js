import './globals.css'
import styles from './layout.module.css'
import {ibm_plex_sans} from "../app/fonts";

export const metadata = {
    title: 'Coffee connoisseur',
    description: 'Next.js training app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={ibm_plex_sans.className}>
        <div className={styles.container}>
            {children}
            <footer>

            </footer>
        </div>
        </body>
        </html>
    )
}
