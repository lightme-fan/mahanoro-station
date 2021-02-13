import axios from "axios";

export const fetchApi = (value) => {
    return {
        type: "FETCH_API",
        payload: value
    }
}

export function fetchData() {
    return async (dispatch) => {
        const response = axios('https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json')
        const item = response.data
        console.log(item);
        dispatch({type: FETCHAPI , payload: item})
    }
}

