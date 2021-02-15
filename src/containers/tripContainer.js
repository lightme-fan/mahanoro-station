import React, {useEffect} from 'react'
import {Trips} from '../components/trips'
import clock from '../../svg/clock.svg'
import carIcon from '../../svg/carIcon.svg'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Header } from '.'
import { format, getYear } from 'date-fns'

function TripContainer() {
    const { destination } = useParams()
    const tripDestination = useSelector(state => state.tripsData)
    const city = tripDestination.find(item => item.destination === destination)
    const trips = tripDestination.filter(city => city.destination === destination)
    return (
        <Trips>
            <Header/>
            <Trips.Wrapper>
                <Trips.Title>
                    <div>
                        <img src={clock} alt="Time departure" />
                        <h2>Next trips to:</h2>
                        <div>{city?.destination}</div>
                    </div>
                </Trips.Title>
                {trips.map(trip => {
                    const date = new Date(trip.departureTime);
                    const parsedTime = parseISO(date);
                    console.log(parsedTime);
                    return (
                        <Trips.Card key={trip.id}>
                            <Trips.CarLogo src={carIcon} />
                            <Trips.Departure>
                                <Trips.TimeDeparture>
                                    <div></div>
                                    <div></div>
                                </Trips.TimeDeparture>
                                <Trips.DateDeparture>
                                    <Trips.AvailableSeats>seats lefts</Trips.AvailableSeats>
                                </Trips.DateDeparture>
                                <Link to='/bookSeats'>Book a seat</Link>                                
                            </Trips.Departure>
                        </Trips.Card>
                    )
                })}
            </Trips.Wrapper>
        </Trips>
    )
}

export default TripContainer
