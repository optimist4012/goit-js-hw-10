const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = "live_wiz4aqvBqVsAYTvONpjBSdJi36tcSZFkpbCW2Th87HIudJ0Gnt4hFcFkL1FLAJel";
export function fetchBreeds () {
        return  fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
        .then(resp => {
            console.log(resp)
            if(!resp.ok){
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .catch(error => console.log(error))
} 
export function fetchCatByBreed(breedId) {
    return  fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then(resp => {
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json()
    });
} 