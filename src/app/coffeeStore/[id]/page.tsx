import Link from "next/link";
import type {Metadata} from 'next'
import styles from "../../../styles/coffee-store.module.css";
import Image from "next/image";
import CoffeeStoreContent from "../../../components/coffee-store-content";
import fetchCoffeeStores from "../../../lib/coffee-stores";
import CsCoffeeStore from "../../../components/cs-coffee-store";

export const dynamicParams = true

type Props = {
    params: { id: string }
}

export const metadata: Metadata = {
    title: "Coffee Store Details"
}

async function getCoffeeStore(params) {
    const coffeeStoresData = await fetchCoffeeStores()
    const coffeeStore = coffeeStoresData.find(it => it.fsq_id.toString() === params.id)
    return coffeeStore ? coffeeStore : {}
}

export async function generateStaticParams() {
    const coffeeStoresData = await fetchCoffeeStores()
    return coffeeStoresData.map((it) => {
        return {id: it.fsq_id.toString()}
    })
}

const CoffeeStore = async ({params}: Props) => {
    const coffeeStore = await getCoffeeStore(params)
    console.log("Prams", params)
    console.log("CoffeeStore", coffeeStore)

    if (!coffeeStore)
        return <div>Loading...</div>

    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">⬅ Back to home</Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{coffeeStore.name}</h1>
                    </div>
                    <div className={styles.storeImgWrapper}>
                        <Image
                            src={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                            alt={`${coffeeStore.name} image`}
                            width={600}
                            height={360}
                            className={styles.storeImg}
                        />
                    </div>
                </div>
                {coffeeStore && Object.keys(coffeeStore).length > 0 ?
                    <CoffeeStoreContent coffeeStore={coffeeStore}/> :
                    <CsCoffeeStore id={params.id} coffeeStore={coffeeStore}/>
                }
            </div>
        </div>
    )
}

export default CoffeeStore;
