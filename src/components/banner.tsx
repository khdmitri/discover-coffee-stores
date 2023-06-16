'use client'

import styles from './banner.module.css'
import {inter} from "../app/fonts";

const Banner = (props) => {
    const onClickBannerBtn = async () => {
        console.log(`Banner button clicked!`)
        await props.onClickBanner()
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}><span className={styles.title1}>Coffee</span> <span
                className={styles.title2}>connoisseur</span></h1>
            <p className={styles.subTitle}>Discover your local coffee shops!</p>
            <div className={styles.buttonWrapper}>
                <button style={inter.style} className={styles.button} onClick={onClickBannerBtn}>{props.buttonText}</button>
            </div>
        </div>
    );
};

export default Banner;