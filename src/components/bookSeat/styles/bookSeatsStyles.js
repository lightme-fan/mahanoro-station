import styled from 'styled-components'

export const Container = styled.div`
    .disabled {
        background: #FFFFFE;
    }
`
export const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    max-width: 1110px;
    margin: auto;
    padding: 1rem;
    margin-top: 4rem;
`
export const Header = styled.header`
    display: flex;
    gap: 10%;
    justify-content: center;
    font-size: 22px;
    line-height: 56px;

    h2, p {
        margin: 0;
    }

    p {
        color: #E53170;
    }
`

export const Detail = styled.div`
    margin-top: 4rem;
    display: flex;
    gap:8%;
    justify-content: center;

    h3 {
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 3rem;
    }
`

export const Title = styled.h2``
export const Choices = styled.div`
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 5px;

        img {
            width: 50px;
        }

        .booked {
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(360deg, #FFAC33 117.76%, rgba(255, 255, 255, 0) 187.45%);
        }
    }

`
export const TripInfo = styled.div`
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        color: #A7A9BE;
        padding: 7px 0;
        display: flex;
        justify-content: space-between;
    }

    b {
        color: #000000;
        padding-left: 2rem;
    }

    div {
        color: #FF8906;
        font-size: 38px;
        margin-bottom: 1rem;

        span {
            font-size: 24px;

        }
    }

    button {
        background: #E53170;
        padding: 1rem 2rem;
        border: none;
        color: #fff;
    }
`
export const Modal = styled.div`
`
export const ModalWarning = styled.h2`
`
export const ModalText = styled.div`
`

export const Logo = styled.img`
`
