import styles from './page.module.css'
import Banner from "@/components/banner";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Coffee connoisseur</h1>
            <Banner/>
        </main>
    )
}
