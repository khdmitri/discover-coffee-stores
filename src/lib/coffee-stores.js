import {createApi} from 'unsplash-js';

const FOURSQUARE_API_URL = "https://api.foursquare.com/v3"
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
const ITEMS_LIMIT = 6

function getUrlCoffeeStores(latLong, query, limit) {
    return `${FOURSQUARE_API_URL}/places/search?query=${query}&ll=${latLong}&limit=${limit}`
}

const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getCoffeeStorePhoto = async (extended_search="") => {
    const photos = await unsplash.search.getPhotos({
        query: `coffee shop ${extended_search}`,
        page: 1,
        perPage: 1,
    })

    const unsplashResults = photos.response.results
    return unsplashResults.map(it => it.urls["small"])
}

const fetchCoffeeStores = async (latLong='54.290324,48.306482', limit=ITEMS_LIMIT) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
        }
    };

    const response = await fetch(getUrlCoffeeStores(latLong, "coffee shop", limit), options)
    const data = await response.json()
// .catch(err => console.error(err));
    return await Promise.all(data.results.map(async result => {
        const photo = await getCoffeeStorePhoto(result.name)
        console.log("photo", photo)
        return {
            ...result,
            imgUrl: photo && Array.isArray(photo) ? photo[0] : DEFAULT_IMAGE
        }
    }))
}

export default fetchCoffeeStores;
