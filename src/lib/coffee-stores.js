const FOURSQUARE_API_URL = "https://api.foursquare.com/v3"

function getUrlCoffeeStores(latLong, query, limit) {
    return `${FOURSQUARE_API_URL}/places/search?query=${query}&ll=${latLong}&limit=${limit}`
}

const fetchCoffeeStores = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.FOURSQUARE_API_KEY
        }
    };

    const response = await fetch(getUrlCoffeeStores('54.290324%2C48.306482', "coffee shop", 6), options)
    const data = await response.json()
// .catch(err => console.error(err));
    return data.results
}

export default fetchCoffeeStores;
