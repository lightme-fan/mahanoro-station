import React from 'react'

import { 
    Container,
    Wrapper,
    Title,
    Card,
    CarLogo,
    Departure,
    TimeDeparture,
    DateDeparture,
    AvailableSeats,
    BookingSeats
} from './styles/trips'

export function Trips({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Trips.Wrapper = function TripsWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Trips.Title = function TripsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Trips.Card = function TripsCard({children, ...restProps}) {
    return <Card {...restProps}>{children}</Card>
}

Trips.CarLogo = function TripsCarLogo({children, ...restProps}) {
    return <CarLogo {...restProps} />
}

Trips.Departure = function TripsDeparture({children, ...restProps}) {
    return <Departure {...restProps}>{children}</Departure>
}

Trips.TimeDeparture = function TripsDeparture({children, ...restProps}) {
    return <TimeDeparture {...restProps}>{children}</TimeDeparture>
}

Trips.DateDeparture = function TripsDateDeparture({children, ...restProps}) {
    return <DateDeparture {...restProps}>{children}</DateDeparture>
}

Trips.AvailableSeats = function TripsAvailableSeats({children, ...restProps}) {
    return <AvailableSeats {...restProps}>{children}</AvailableSeats>
}

Trips.BookingSeats = function TripsBookingSeats({children, ...restProps}) {
    return <BookingSeats {...restProps}>{children}</BookingSeats>
}

