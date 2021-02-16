import styled from "styled-components"

export const Container = styled.header`
    margin: 0;
    background-color: #0F0E17;
    color: #fff;

    a {
        text-decoration: none;
        color: #fff;
    }
`

export const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.h1`
    margin: 0;
    a {
        display: flex;
        gap: 30px;
    }
`
export const ImageLogo = styled.img`
    width: 24px;
`
export const TextLogo = styled.div`
    font-size: 36px;
    line-height: 43px;
`
export const Account = styled.div``