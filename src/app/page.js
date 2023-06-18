import styles from '../styles/Home.module.css';
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/card";

export default function Home() {
    async function clickOnBannerBtn() {
        'use server'

        console.log('Click on banner button')
    }

    return (
        <main className={styles.main}>
            <Banner buttonText="View stores nearby" onClickBanner={clickOnBannerBtn}/>
            <div className={styles.heroImage}>
                <Image src="/static/hero-image.png"
                       className={styles.heroImage}
                       alt="Hero Image"
                       width={500}
                       height={400}/>
            </div>
            <Card name="DarkHorse Coffee" imgUrl="/static/hero-image.png" href="/coffeeStore/darkhorse-coffee"/>
        </main>
    )
}
