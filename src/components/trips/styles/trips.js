import styled from "styled-components"

export const Container = styled.div`
`;
export const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    padding: 1rem;
`;

export const Title = styled.div`
    img {
        width: 78px;
    }

    h2 {
        margin: 0;
    }

    p {
        margin: 0;
        color: #E53170;
    }

    font-size: 38px;
    line-height: 76px;
    display: flex;
    align-items: center;
    gap: 10%;
    justify-content: center;
`;

export const Card = styled.div`
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    font-size: 22px;
    line-height: 43px;

    button {
        background: #E53170;
        padding: 1rem 2rem;
        border: none;
        font-size: 16px;
        line-height: 24px;
    }

    a {
            background: #E53170;
            padding: 1rem 2rem;
            border: none;
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            line-height: 24px;
        }
`;

export const CarLogo = styled.img`
    width: 50px;
`;

export const Departure = styled.div`
    display: flex;
    gap: 2rem;
`;

export const TimeDeparture = styled.div`
    color: #FF8906;
`;

export const DateDeparture = styled.div``;
export const AvailableSeats = styled.span``;

export const BookingSeats = styled.button`
`;