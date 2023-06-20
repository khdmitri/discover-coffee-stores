import styles from '../styles/Home.module.css';
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/card";
import fetchCoffeeStores from "../lib/coffee-stores";

async function getCoffeeStores() {
    return await fetchCoffeeStores()
}

export default async function Home() {
    const coffeeStoresStatic = await getCoffeeStores()

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
            {coffeeStoresStatic &&
                <>
                    <h2 className={styles.heading2}>Toronto Stores</h2>
                    <div className={styles.cardLayout}>
                        {coffeeStoresStatic.map(it => {
                            return <Card name={it.name}
                                         imgUrl={it.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                                         href={`/coffeeStore/${it.fsq_id}`}
                                         className={styles.card}
                                         key={it.fsq_id}
                            />
                        })}
                    </div>
                </>
            }
        </main>
    )
}
