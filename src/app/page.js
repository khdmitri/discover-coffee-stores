import styles from './page.module.css';
import Banner from "../components/banner";

export default function Home() {
    async function clickOnBannerBtn() {
        'use server'

        console.log('Click on banner button')
    }

    return (
        <main className={styles.main}>
            <Banner buttonText="View stores nearby" onClickBanner={clickOnBannerBtn} />
        </main>
    )
}
