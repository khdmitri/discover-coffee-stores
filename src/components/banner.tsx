'use client'

import styles from './banner.module.css';
import stylesParent from "../styles/Home.module.css";
import useTrackLocation from "../hooks/use-track-location";
import {useContext, useEffect, useState} from "react";
import fetchCoffeeStores from "../lib/coffee-stores";
import Card from "./card";
import {ACTION_TYPES, StoreContext} from "../app/store-provider";

const NEAR_BY_LIMIT = 9

const Banner = (props) => {
    const {handleTrackLocation, locationErrorMsg} = useTrackLocation()
    const [btnText, setBtnText] = useState("")
    const [coffeeStoresError, setCoffeeStoresError] = useState(null)
    const {state, dispatch} = useContext(StoreContext)

    const onClickBannerBtn = async () => {
        setBtnText("Loading...")
        handleTrackLocation()
    }

    useEffect(() => {
        try {
            (async () => {
                const fetchedCoffeeStores: Awaited<unknown> = await fetchCoffeeStores(state.latLong, NEAR_BY_LIMIT)
                dispatch({
                    type: ACTION_TYPES.SET_COFFEE_STORES,
                    payload: {coffeeStores: fetchedCoffeeStores}
                })
                setBtnText(props.buttonText)
            })()
        } catch (error) {
            console.log({error})
            setCoffeeStoresError(error.message)
        }

    }, [state.latLong])

    useEffect(() => {
        setBtnText(props.buttonText)
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}><span className={styles.title1}>Coffee</span> <span
                    className={styles.title2}>connoisseur</span></h1>
                <p className={styles.subTitle}>Discover your local coffee shops!</p>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} onClick={onClickBannerBtn}>{btnText}</button>
                </div>
            </div>
            {state.coffeeStores &&
                <>
                    <h2 className={stylesParent.heading2}>Coffee stores near me</h2>
                    <div className={stylesParent.cardLayout}>
                        {state.coffeeStores.map(it => {
                            return <Card name={it.name}
                                         imgUrl={it.imgUrl}
                                         href={`/coffeeStore/${it.fsq_id}`}
                                         className={stylesParent.card}
                                         key={it.fsq_id}
                            />
                        })}
                    </div>
                </>
            }
            {locationErrorMsg && <p>Something went wrong: {locationErrorMsg}</p>}
            {coffeeStoresError && <p>Something went wrong: {coffeeStoresError}</p>}
        </>
    );
};

export default Banner;