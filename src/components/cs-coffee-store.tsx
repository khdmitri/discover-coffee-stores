'use client'

import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../app/store-provider";
import CoffeeStoreContent from "./coffee-store-content";

const CsCoffeeStore = (params) => {
    const {id, coffeeStore} = params
    const {state: {coffeeStores}} = useContext(StoreContext)
    const [coffeeStoreLocal, setCoffeeStore] = useState({})

    console.log("ID:", id)
    console.log({coffeeStore})

    useEffect(() => {
        setCoffeeStore(coffeeStores ? coffeeStores.find(it => it.fsq_id.toString() === id) : {})
    }, [])

    return (
        <>
            {coffeeStoreLocal &&
                <CoffeeStoreContent coffeeStore={coffeeStoreLocal}/>
            }
        </>
    )
};

export default CsCoffeeStore;