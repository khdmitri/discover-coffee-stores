import Link from "next/link";
import {Metadata, ResolvingMetadata} from 'next'
import styles from "../../../styles/coffee-store.module.css";
import Image from "next/image";
import cls from "classnames";
import Upvote from "../../../components/upvote";
import fetchCoffeeStores from "../../../lib/coffee-stores";

export const dynamicParams = false

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    {params}: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id
    const coffeeStoresData = await fetchCoffeeStores()
    const coffeeStore = await coffeeStoresData.find(it => it.fsq_id.toString() === id)

    return {
        title: coffeeStore ? coffeeStore.name : "Not found coffee store"
    }
}

async function getCoffeeStore(params) {
    const coffeeStoresData = await fetchCoffeeStores()
    return await coffeeStoresData.find(it => it.fsq_id.toString() === params.id)
}

export async function generateStaticParams() {
    const coffeeStoresData = await fetchCoffeeStores()
    return coffeeStoresData.map((it) => {
        return {id: it.fsq_id   .toString()}
    })
}

const CoffeeStore = async ({params}: Props) => {
    const coffeeStore = await getCoffeeStore(params)
    console.log("Prams", params)

    if (!coffeeStore)
        return <div>Loading...</div>

    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">Back to home</Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{coffeeStore.name}</h1>
                    </div>
                    <div className={styles.storeImgWrapper}>
                        <Image src={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                               alt={`${coffeeStore.name} image`}
                               width={600}
                               height={360}
                               className={styles.storeImg}
                        />
                    </div>
                </div>
                <div className={cls("glass", styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/places.svg" alt="Icon" width={24} height={24} />
                        <p className={styles.text}>{coffeeStore.location.address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/nearMe.svg" alt="Icon" width={24} height={24} />
                        <p className={styles.text}>{coffeeStore.categories[0] ? coffeeStore.categories[0].name: ""}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/star.svg" alt="Icon" width={24} height={24} />
                        <p className={styles.text}>1</p>
                    </div>
                    <Upvote />
                </div>
            </div>
        </div>
    )
}

export default CoffeeStore;
