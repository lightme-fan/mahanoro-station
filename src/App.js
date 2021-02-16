import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import TripContainer from './containers/tripContainer'
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
            <Route path='/:destination' exact>
                <TripContainer/>
            </Route>
            <Route path='/:destination/:departureTime'>
                <BookingSeats/>
            </Route>
        </Switch>
    )
}

export default App
