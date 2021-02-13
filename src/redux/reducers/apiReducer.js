import { FETCHAPI } from "../actions/fetchApi";

const initialState = {
    loading: false,
    data: []
}

export default function apiReducer(state= initialState, action) {
    switch (action.type) {
        case "FETCH_API": {
            console.log(state);
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            return state
    }
}
