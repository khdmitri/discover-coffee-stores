import styles from './page.module.css';
import Banner from "../components/banner";
import Image from "next/image";

export default function Home() {
    async function clickOnBannerBtn() {
        'use server'

        console.log('Click on banner button')
    }

    return (
        <main className={styles.main}>
            <Banner buttonText="View stores nearby" onClickBanner={clickOnBannerBtn}/>
            <div className={styles.heroImage}>
                <Image src="/static/hero_image.png"
                       className={styles.heroImage}
                       alt="Hero Image"
                       width={500}
                       height={400}/>
            </div>
        </main>
    )
}
