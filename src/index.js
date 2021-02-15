import React from 'react' 
import ReactDOM  from 'react-dom' 
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { fetchData } from './redux/actions/fetchApi'
import store from './redux/store/store'
store.dispatch(fetchData)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,document.getElementById("root")
)