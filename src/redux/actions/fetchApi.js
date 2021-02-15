import axios from "axios";

export const ACTION_TYPE = {type: "FECTH_API_SUCCESS"}

export function fetchData() {
    return (dispatch) => {
        const fetchedApi = async () => {
            const response = await fetch('https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json')
            const item = await response.json()
            console.log(item);
            dispatch({type: ACTION_TYPE.type, payload: item})
        }
        fetchedApi()
    }
}
