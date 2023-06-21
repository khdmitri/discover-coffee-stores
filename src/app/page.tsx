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

    return (
        <main className={styles.main}>
            <Banner buttonText="View stores nearby" />
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
