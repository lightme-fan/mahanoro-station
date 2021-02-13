import { combineReducers } from "redux"
import apiReducer from "./apiReducer"

const rootReducer = combineReducers({
    cityData: apiReducer
}) 

export default rootReducer