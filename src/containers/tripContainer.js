import React, {useEffect} from 'react'
import {Trips} from '../components/trips'
import clock from '../../svg/clock.svg'
import carIcon from '../../svg/carIcon.svg'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Header } from '.'
import { format, getYear } from 'date-fns'

function TripContainer() {
    const { destination } = useParams()
    const tripDestination = useSelector(state => state.tripsData)
    const trips = tripDestination.filter(city => city.destination === destination)
    return (
        <Trips>
            <Header/>
            <Trips.Wrapper>
                <Trips.Title>
                    <div>
                        <img src={clock} alt="Time departure" />
                        <h2>Next trips to:</h2>
                        <div>{destination}</div>
                    </div>
                </Trips.Title>
                {trips.map(trip => {
                    const availableSeats = trip.seats.filter(seat => seat.isAvailable).length
                    return (
                        <Trips.Card key={trip.id}>
                            <Trips.CarLogo src={carIcon} />
                            <Trips.Departure>
                                <Trips.TimeDeparture>
                                    <div>{trip.departureTime}</div>
                                    <div>{trip.departureTime}</div>
                                </Trips.TimeDeparture>
                                <Trips.DateDeparture>
                                    <Trips.AvailableSeats>{availableSeats} seats lefts</Trips.AvailableSeats>
                                </Trips.DateDeparture>
                                {availableSeats === 0 ?
                                    <button disabled>Book a seat</button> :
                                    <button><Link to={`/${trip.destination}/${trip.departureTime}`}>Book a seat</Link></button>}                                
                            </Trips.Departure>
                        </Trips.Card>
                    )
                })}
            </Trips.Wrapper>
        </Trips>
    )
}

export default TripContainer
