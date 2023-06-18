import '../styles/globals.css';
import styles from './layout.module.css';
import { IBM_Plex_Sans } from "next/font/google";

const ibm_plex_sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['500', '600', '700']
})

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
