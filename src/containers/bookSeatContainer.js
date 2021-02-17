import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { format } from 'date-fns'

import unavailableSeat from '../../svg/unavailableSeat.svg'
import availableSeat from '../../svg/availableSeat.svg'
import bookAvailableSeat from '../../svg/bookAvailableSeat.svg'

import { Header } from '.'
import {BookSeat} from '../components/bookSeat'
import carIcon from '../../svg/carIcon.svg'

import bookSeat from '../../svg/bookSeat.svg'
import { showModal } from '../redux/actions/modalAction'
import ModalContainer from './ModalContainer'
import { handleBookSeatAction, addClassNameAction } from '../redux/actions/handleBookSeatAction'
import { userAction } from '../redux/actions/userAction'
import { bookedTrip } from '../redux/actions/bookedTrip'

function BookSeatContainer() {
    const trips = useSelector(state => state.tripsData)
    const modal = useSelector(state => state.isModalOpen)
    const bookSeat = useSelector(state => state.bookedSeats)
    const user = useSelector(state => state.user)
    const classlist = useSelector(state => state.classlist)
    const dispatch = useDispatch()
    const { id } = useParams()

    const carSeats = trips.find(item => {
        return item.id === Number(id)
    })

    const modalClassName = modal ===true && 'disabled-element'

    function handleChairOnClick(e) {
        const imageValue =  e.target.dataset.value;
        const findSeat = carSeats?.seats.find(seat => {
            return seat.id === Number(imageValue)
        })

        if (findSeat) {
            console.log(user);
            findSeat.isAvailable= user.isSeatAvailabe
            findSeat.passengerFirstName= user.firstName
            findSeat.passengerLastName= user.lastName
            findSeat.passengerPhoneNumber= user.phoneNumber
            dispatch(userAction(findSeat))
        }
       
        dispatch(handleBookSeatAction(findSeat))
    }
    
    const findBookedPlaces = carSeats?.seats.filter(seat => seat.isAvailable === false && seat.passengerFirstName && seat.passengerLastName && seat.passengerPhoneNumber);
    dispatch(bookedTrip(findBookedPlaces))

    return (
        <>
        <BookSeat className={modal=== true && 'disabled-element'}>
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
                                        seat.isAvailable  && seat.passengerFirstName==='' && seat.passengerLastName==='' ?   
                                            <img 
                                                key={seat.id}
                                                src={availableSeat} 
                                                onClick={handleChairOnClick} 
                                                data-value={seat.id}
                                                style={{ cursor: 'pointer'}}
                                            /> : 
                                        !seat.isAvailable  && seat.passengerFirstName && seat.passengerLastName ?
                                            <img  src={bookAvailableSeat} key={seat.id}/> :
                                        !seat.isAvailable &&
                                        <img src={unavailableSeat} key={seat.id}/>
                                    )
                                })
                            }
                        </div>
                    </BookSeat.Choices>
                    <BookSeat.TripInfo>
                        <h3>Trip informations:</h3>
                        {/*  */}
                        <ul>
                            <li>
                                Departure time:  
                                <b>
                                    {`${format(new Date(carSeats?.departureTime), 'ee')}/
                                        ${format(new Date(carSeats?.departureTime), 'MM')}
                                        /2021`
                                    }
                                </b>
                                </li>
                            <li>Driver: <b>{carSeats?.driverName}</b></li>
                            <li>Driver's contact:  <b>{carSeats?.driverContact}</b></li>
                            <li>Estimated duration: <b>{carSeats?.estimatedDuration}</b></li>
                            <li>Breaks: <b>{carSeats?.breaks}</b></li>
                        </ul>
                        <div>{carSeats?.price} <b>Ar/<span>seat</span></b></div>
                        <button onClick={() => dispatch(showModal())}>Book {bookSeat} seats</button>
                    </BookSeat.TripInfo>
                </BookSeat.Detail>
            </BookSeat.Wrapper>
        </BookSeat>
        {modal === true &&
            <ModalContainer/>
        }
        </>
    )
}

export default BookSeatContainer
