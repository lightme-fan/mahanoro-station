import React from 'react'
import { Header } from '../components/header'
import logoIcon from '../../svg/logo-icon.svg'
import { Link } from 'react-router-dom'

function HeaderContainer() {
    return (
        <Header>
            <Header.Wrapper>
                <Header.Logo>
                    <Header.ImageLogo src={logoIcon} alt="Logo"/>
                    <Header.TextLogo>Mahanoro Station</Header.TextLogo>
                </Header.Logo>
                <Link to='/account'>My account</Link>
            </Header.Wrapper>
        </Header>
    )
}

export default HeaderContainer
