'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";

type propType = {
    name: string;
    imgUrl: string;
    href: string;
}

function CardContent({name, imgUrl}) {
    return (
        <>
            <h2>{name}</h2>
            <Image src={imgUrl} alt={`${name} image`} width={260} height={160}></Image>
        </>
    )
}

const Card = (props: propType) => {
    console.log("Props", props)
    return (
        <Link href={props.href} className={styles.cardLink}>
            <CardContent name={props.name} imgUrl={props.imgUrl} />
        </Link>
    );
};

export default Card;