import React from 'react'

import {
    Container,
    Wrapper,
    Form,
    FormLabel,
    FormSpan,
    FormInput,
    Bookings,
    BookingCard,
    CarLogo,
    BookingDestination,
    BookingSeats,
    BookingButton,
} from './styles/account'

function Account({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Account.Wrapper = function AccountWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Account.Form = function AccountForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}

Account.FormLabel = function AccountFormLabel({children, ...restProps}) {
    return <FormLabel {...restProps}>{children}</FormLabel>
}

Account.FormSpan = function AccountFormSpan({children, ...restProps}) {
    return <FormSpan {...restProps}>{children}</FormSpan>
}

Account.FormInput = function AccountFormInput({children, ...restProps}) {
    return <FormInput {...restProps}/>
}

Account.Bookings = function AccountBookings({children, ...restProps}) {
    return <Bookings {...restProps}>{children}</Bookings>
}

Account.BookingCard = function AccountBookingCard({children, ...restProps}) {
    return <BookingCard {...restProps}>{children}</BookingCard>
}

Account.CarLogo = function AccountCarLogo({children, ...restProps}) {
    return <CarLogo {...restProps} />
}

Account.BookingDestination = function AccountBookingDestination({children, ...restProps}) {
    return <BookingDestination {...restProps}>{children}</BookingDestination>
}

Account.BookingSeats = function AccountBookingSeats({children, ...restProps}) {
    return <BookingSeats {...restProps}>{children}</BookingSeats>
}

Account.BookingButton = function AccountBookingButton({children, ...restProps}) {
    return <BookingButton {...restProps}>{children}</BookingButton>
}

export default Account
