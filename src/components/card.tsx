'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";
import cls from "classnames";

type propType = {
    name: string;
    imgUrl: string;
    href: string;
}

function CardContent({name, imgUrl}) {
    return (
        <div className={cls('glass', styles.container)}>
            <div className={styles.cardHeaderWrapper}>
                <h2 className={styles.cardHeader}>{name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
                <Image className={styles.cardImage} src={imgUrl} alt={`${name} image`} width={260} height={160}></Image>
            </div>
        </div>
    )
}

const Card = (props: propType) => {
    console.log("Props", props)
    return (
        <Link href={props.href} className={styles.cardLink}>
            <CardContent name={props.name} imgUrl={props.imgUrl}/>
        </Link>
    );
};

export default Card;