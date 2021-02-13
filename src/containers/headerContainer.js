import React from 'react'
import { Header } from '../components/header'
import logoIcon from '../../svg/logo-icon.svg'

function headerContainer() {
    return (
        <Header>
            <Header.Wrapper>
                <Header.Logo>
                    <Header.ImageLogo src={logoIcon} alt="Logo"/>
                    <Header.TextLogo>Mahanoro Station</Header.TextLogo>
                </Header.Logo>
                
            </Header.Wrapper>
        </Header>
    )
}

export default headerContainer
