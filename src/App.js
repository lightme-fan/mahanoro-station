import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import BookingSeats from './pages/booking-seats'
import Home from './pages/home'
import { fetchData } from './redux/actions/fetchApi'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    
    return (
        <Switch>
            <Route path='/' exact>
                <Home/>   
            </Route>
            <Route path='/:destination'>
                <BookingSeats/>
            </Route>
        </Switch>
    )
}

export default App
