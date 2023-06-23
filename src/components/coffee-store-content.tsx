import cls from "classnames";
import styles from "../styles/coffee-store.module.css";
import Image from "next/image";
import Upvote from "./upvote";
import Head from "next/head";

const CoffeeStoreContent = (params) => {
    const {coffeeStore} = params

    console.log({coffeeStore})

    return (
        <div className={cls("glass", styles.col2)}>
            {coffeeStore.location &&
                <div className={styles.iconWrapper}>
                    <Image src="/static/icons/places.svg" alt="Icon" width={24} height={24}/>
                    <p className={styles.text}>{coffeeStore.location.address}</p>
                </div>
            }
            {coffeeStore.categories &&
                <div className={styles.iconWrapper}>
                    <Image src="/static/icons/nearMe.svg" alt="Icon" width={24} height={24}/>
                    <p className={styles.text}>{coffeeStore.categories[0] ? coffeeStore.categories[0].name : ""}</p>
                </div>
            }
            <div className={styles.iconWrapper}>
                <Image src="/static/icons/star.svg" alt="Icon" width={24} height={24}/>
                <p className={styles.text}>1</p>
            </div>
            <Upvote/>
        </div>
    );
};

export default CoffeeStoreContent;