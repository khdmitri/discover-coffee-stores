import {useState} from "react";

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('')
    const [latLong, setLatLong] = useState('')

    const success = (position) => {
        setLatLong(`${position.coords.latitude},${position.coords.longitude}`)
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
        latLong,
        handleTrackLocation,
        locationErrorMsg
    }
}

export default useTrackLocation;