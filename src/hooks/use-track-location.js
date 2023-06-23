'use client'

import {useContext, useState} from "react";
import {ACTION_TYPES, StoreContext} from "../app/store-provider";

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('')
    const {dispatch} = useContext(StoreContext)
    // const [latLong, setLatLong] = useState('')

    const success = (position) => {
        // setLatLong(`${position.coords.latitude},${position.coords.longitude}`)
        dispatch({
            type: ACTION_TYPES.SET_LAT_LONG,
            payload: {latLong: `${position.coords.latitude},${position.coords.longitude}`}
        })
        setLocationErrorMsg('')
    }

    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location")
    }

    const handleTrackLocation = () => {
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser")
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return {
        handleTrackLocation,
        locationErrorMsg
    }
}

export default useTrackLocation;