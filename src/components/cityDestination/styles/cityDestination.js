import styled from "styled-components"

export const Container = styled.article`
    max-width: 1114px;
    margin: auto;
    padding: 1rem;
`

export const Fame = styled.div`
    max-width: 900px;
    margin: auto;
`
export const Title = styled.h2`
    display: flex;
    gap: 5%;
    align-items: center;
    font-size: 35px;
    line-height: 76px;
    font-weight: 700;
    
    img {
        width: 70px;
    }
`

export const Cities = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
`
export const ListCities = styled.li`
    width: 100%;
    a {
        text-decoration: none;
        background-color: #000;
        color: #fff;
        display: flex;
        gap: 5%;
        align-items: center;
        justify-content: space-around;
        text-transform: uppercase;
        font-size: 18px;
        line-height: 43px;
        padding: 1rem;

        img {
            width: 30px;
        }
    }
`
export const Button = styled.button``