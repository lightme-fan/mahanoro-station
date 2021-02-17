import styled from "styled-components"

export const Container = styled.div`
`
export const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    padding: 1rem;
    margin-top: 3rem;

    header {
        display: flex;
        gap: 6%;
        justify-content: center;

        img {
            width: 92px;
        }

        font-size: 24px;
        h1, h2 {
            margin: 0;
        }

        h2 {
            color: #E53170;
            font-weight: 400;
        }
    }

    h3 {
        text-transform: uppercase;
    }
`

export const Detail = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
        width: 117px;
        height: 50px;
        background: #E53170;
        align-self: flex-end;
        border: none;
        color: #fff;
    }
`

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
`
export const FormSpan = styled.span``
export const FormInput = styled.input`
    background: #000000;
    color: #FF8906;
    padding: 20px 22px;
`
export const Bookings = styled.div`
    ul {
        list-style: none;
        padding: 0;
    }
`
export const BookingCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const CarLogo = styled.img`
    width: 58px;
`
export const BookingDestination = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;
`
export const BookingSeats = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;
`
export const BookingButton = styled.button`
    background-color: #FF8906;
    color: #fff;
    width: 100px;
    height: 51px;
    border: none;
`