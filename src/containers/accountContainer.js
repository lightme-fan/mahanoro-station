import React from 'react'
import { Header } from '.'
import Account from '../components/account'
import carIcon from '../../svg/carIcon.svg'
import account from '../../svg/account.svg'
import { useDispatch, useSelector } from 'react-redux'
import {userAction} from '../redux/actions/userAction'

export default function AccountContainer() {
  const trips = useSelector(state => state.tripsData)
  const user = useSelector(state => state.user)
  const destination = useSelector(state => state.cities)
  const nextTrip = useSelector(state => state.bookedNextTrip)
   
  return (
    <Account>
      <Header/>
      <Account.Wrapper>
        <header>
          <img src={account}/>
          <div>
            <h1>My account</h1>
            <h2>{user.firstName}</h2>
          </div>
        </header>
        <Account.Detail>
          <Account.Form>
            <h3>My personnal informations:</h3>
            <Account.FormLabel>
              <Account.FormSpan>First Name</Account.FormSpan>
              <Account.FormInput
                type="text"
                placeholder="firstName"
                value={user.firstName}
                onChange={({target}) => target.value}
              />
            </Account.FormLabel>
            <Account.FormLabel>
              <Account.FormSpan>Last Name</Account.FormSpan>
              <Account.FormInput
                type="text"
                placeholder="lastName"
                value={user.lastName}
                onChange={({target}) => target.value}
              />
            </Account.FormLabel>
            <Account.FormLabel>
              <Account.FormSpan>Phone Number</Account.FormSpan>
              <Account.FormInput
                type="text"
                placeholder="phone number"
                value={user.phoneNumber}
                onChange={({target}) => target.value}
              />
            </Account.FormLabel>
            <button>Update</button>
          </Account.Form>

          <Account.Bookings>
            <h3>My bookings:</h3>
            <ul>
              <Account.BookingCard>
                <Account.CarLogo src={carIcon} />
                <Account.BookingDestination>
                  <span>Antananrivo</span>
                  <span>13/02/2020, 14:00</span>
                </Account.BookingDestination>
                <Account.BookingSeats>
                  <span>1 seat</span>
                  <span>20 000 Ar</span>
                </Account.BookingSeats>
                <Account.BookingButton>Cancel</Account.BookingButton>
              </Account.BookingCard>
            </ul>
          </Account.Bookings>
        </Account.Detail>
      </Account.Wrapper>
    </Account>
  )
}
