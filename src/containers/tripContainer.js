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
    console.log(tripDestination);

    const trips = tripDestination.filter(city => city.destination === destination)
    return (
        <Trips>
            <Header/>
            <Trips.Wrapper>
                <Trips.Title>
                    <img src={clock} alt="Time departure" />
                    <div>
                        <h2>Next trips to:</h2>
                        <p>{destination}</p>
                    </div>
                </Trips.Title>
                {trips.map(trip => {
                    const availableSeats = trip.seats.filter(seat => seat.isAvailable === true).length
                    const dayDeparture = new Date(trip.departureTime)
                    return (
                        <Trips.Card key={trip.id}>
                            <Trips.CarLogo src={carIcon} />
                            <Trips.Departure>
                                <Trips.TimeDeparture>
                                    <div>
                                        <div>{format(dayDeparture, 'eeee')}</div>
                                        <div>{`${format(dayDeparture, 'kk')}: ${format(dayDeparture, 'mm')}`}</div>
                                    </div>
                                </Trips.TimeDeparture>
                                <Trips.DateDeparture>
                                    <div>{`${format(dayDeparture, 'ee')}/${format(dayDeparture, 'MM')}/2020`}</div>
                                    <Trips.AvailableSeats>{availableSeats} seats lefts</Trips.AvailableSeats>
                                </Trips.DateDeparture>
                            </Trips.Departure>
                            {availableSeats === 0 ?
                                <button disabled>Book a seat</button> :
                                <Link to={`/destination/${trip.destination}/${trip.id}`}>Book a seat</Link>}                                
                        </Trips.Card>
                    )
                })}
            </Trips.Wrapper>
        </Trips>
    )
}

export default TripContainer
