import {IBM_Plex_Sans, Inter} from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "600"],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})