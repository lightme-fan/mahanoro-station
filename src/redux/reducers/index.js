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

const initialValue = {
    booking: 0,
    classlist: ''
}

function bookSeatReducer(state= 0, action) {
    switch (action.type) {
        case 'CLICK_BOOK_SEAT' : {
            return state + 1
        }
        default:
            return state
    }
}

function classNameReducer(state = '', action) {
    switch (action.type) {
        case 'ADD_CLASS_NAME':
            return state = 'booked'
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

function bookedDestination(state = null, action) {
    switch (action.type) {
        case 'BOOK_DESTINATION':
            return action.payload
        default:            
        return state
    }
}

const initialUserState = {
    extraLuggage: false,
    id: new Date(),
    firstName: "Fanilo",
    lastName: "Tokiniaina",
    phoneNumber: "0348113468",
    isSeatAvailabe: false
}
function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state
        default:            
        return state
    }
}


function modalReducer(state = false, action) {
    switch (action.type) {
        case 'SHOW_MODAL_CONFIRM':
            return state = true
        case 'HIDE_MODAL_CONFIRM':
            return state = false
        default:            
        return state
    }
}

export const rootReducer = combineReducers({
    tripsData: tripsReducer,
    cities: cityDestinationReducer,
    bookedNextTrip: bookedDestination,
    isModalOpen: modalReducer,
    bookedSeats: bookSeatReducer,
    user: userReducer,
    classlist: classNameReducer
}) 
