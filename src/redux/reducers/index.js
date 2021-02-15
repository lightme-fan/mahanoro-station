import { combineReducers } from "redux"

import { ACTION_TYPE } from "../actions/fetchApi";

const cities = [
    {destination: 'Antananarivo', id: 1},
    {destination: 'Toamasina', id: 2},
    {destination: 'Vatomandry', id: 3},
    {destination: 'Moramanga', id: 4},
]

function tripsReducer(state= [], action) {
    switch (action.type) {
        case ACTION_TYPE.type: {
            return action.payload
        }
        default:
            return state
    }
}

function cityDestinationReducer(state = cities, action) {
    switch (action.type) {
        case 'CITY_DESTINATION':
            return action.payload
        default:            
        return state
    }
}

export const rootReducer = combineReducers({
    tripsData: tripsReducer,
    cities: cityDestinationReducer
}) 
