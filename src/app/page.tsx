import styles from '../styles/Home.module.css';
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/card";
import coffeeStoresData from "../data/coffee-stores.json";

type CoffeeShopType = {
    id: number
    name: string
    imgUrl: string
    websiteUrl: string
    address: string
    neighbourhood: string
}

async function getCoffeeStores(): Promise<Array<CoffeeShopType>> {
    const coffeeStores = coffeeStoresData
    return coffeeStores
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
                                         imgUrl={it.imgUrl}
                                         href={`/coffeeStore/${it.id}`}
                                         className={styles.card}
                                         key={it.id}
                            />
                        })}
                    </div>
                </>
            }
        </main>
    )
}
