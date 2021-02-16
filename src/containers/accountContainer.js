import React from 'react'
import { Header } from '.'
import Account from '../components/account'
import carIcon from '../../svg/carIcon.svg'
import { useSelector } from 'react-redux'

export default function AccountContainer() {
  const trips = useSelector(state => state.tripsData)
  console.log(trips);
  return (
    <Account>
      <Header/>
      <Account.Wrapper>
        <Account.Form>
          <h2>My personnal informations:</h2>
          <Account.FormLabel>
            <Account.FormSpan>First Name</Account.FormSpan>
            <Account.FormInput
              type="text"
              placeholder="firstName"
            />
          </Account.FormLabel>
          <Account.FormLabel>
            <Account.FormSpan>Last Name</Account.FormSpan>
            <Account.FormInput
              type="text"
              placeholder="lastName"
            />
          </Account.FormLabel>
          <Account.FormLabel>
            <Account.FormSpan>Phone Number</Account.FormSpan>
            <Account.FormInput
              type="number"
              placeholder="0349789355"
            />
          </Account.FormLabel>
          <button>Update</button>
        </Account.Form>

        <Account.Bookings>
          <h2>My bookings:</h2>
          <ul>
            <Account.BookingCard>
              <Account.CarLogo src={carIcon} />
              <Account.BookingDestination>
                <span></span>
                <span></span>
              </Account.BookingDestination>
              <Account.BookingSeats>
                <span></span>
                <span></span>
              </Account.BookingSeats>
              <Account.BookingButton>Cancel</Account.BookingButton>
            </Account.BookingCard>
          </ul>
        </Account.Bookings>
      </Account.Wrapper>
    </Account>
  )
}
