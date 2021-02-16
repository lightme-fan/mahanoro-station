import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Header } from '.'
import {BookSeat} from '../components/bookSeat'
import carIcon from '../../svg/carIcon.svg'
import unavailableSeat from '../../svg/unavailableSeat.svg'
import availableSeat from '../../svg/availableSeat.svg'
import bookSeat from '../../svg/bookSeat.svg'
import { showModal } from '../redux/actions/modalAction'
import ModalContainer from './ModalContainer'
import { handleBookSeatAction } from '../redux/actions/handleBookSeatAction'

function BookSeatContainer() {
    const trips = useSelector(state => state.tripsData)
    const modal = useSelector(state => state.isModalOpen)
    const bookSeat = useSelector(state => state.bookedSeats)
    const dispatch = useDispatch()
    const { destination } = useParams()
    console.log(bookSeat);
    const carSeats = trips.find(item => {
        return item.destination === destination
    })
    
    return (
        <BookSeat className={modal === true && 'disabled'}>
            <Header/>
            <BookSeat.Wrapper>
                <BookSeat.Header>
                    <BookSeat.Logo src={carIcon}/>
                    <BookSeat.Title>
                        <h2>Book a seat to: </h2>
                        <p>{carSeats?.destination}</p>
                    </BookSeat.Title>
                </BookSeat.Header>
                <BookSeat.Detail>
                    <BookSeat.Choices>
                        <h3>Pick a seat</h3>
                        <div>
                            {
                                carSeats?.seats.map(seat => {
                                    return (
                                        seat.isAvailable  && !seat.passengerFirstName && !seat.passengerLastName ? 
                                            <img src={availableSeat} className={bookSeat && 'booked'} onClick={() => dispatch(handleBookSeatAction())} /> : 
                                            <img src={unavailableSeat} />  
                                    )
                                })
                            }
                        </div>
                    </BookSeat.Choices>
                    <BookSeat.TripInfo>
                        <h3>Trip informations:</h3>
                        <ul>
                            <li>Departure time:  <b>{carSeats?.departureTime}</b></li>
                            <li>Driver: <b>{carSeats?.driverName}</b></li>
                            <li>Driver's contact:  <b>{carSeats?.driverContact}</b></li>
                            <li>Estimated duration: <b>{carSeats?.estimatedDuration}</b></li>
                            <li>Breaks: <b>{carSeats?.breaks}</b></li>
                        </ul>
                        <div>20 000 <b>Ar/<span>seat</span></b></div>
                        <button onClick={() => dispatch(showModal())}>Book {bookSeat} seats</button>
                    </BookSeat.TripInfo>
                </BookSeat.Detail>
                <div>
                    {modal === true &&
                        <ModalContainer/>
                    }
                </div>
            </BookSeat.Wrapper>
        </BookSeat>
    )
}

export default BookSeatContainer
