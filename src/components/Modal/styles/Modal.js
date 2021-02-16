import styled from "styled-components"

export const Container = styled.div`
    height: 500px;
    border: 5px solid #E53170;
    box-sizing: border-box;
    max-width: 100%;
    margin: auto;
    display: grid;
    position: absolute;
    padding: 0 15%;
    top: 27px;
    left: 20%;
    z-index: 1;
`;
export const Wrapper = styled.div`
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;
export const Heading = styled.header`
    display: flex;
    gap: 6%;
`;
export const Title = styled.h2``;
export const Logo = styled.img``;
export const Text = styled.p``;
export const ComfirmButton = styled.button`
    padding: 15px 27px;
    background-color: #E53170;
    color: #fff;
    width: 45%;
    border: none;
    margin-left: 4rem;
`;