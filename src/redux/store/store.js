import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { fetchApi } from "../actions/fetchApi";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => {
    store.getState()
    console.log(store.getState());
})
store.dispatch(fetchApi())
export default store