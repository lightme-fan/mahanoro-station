import React from 'react'

import { 
    Container,
    Wrapper,
    Logo,
    ImageLogo,
    TextLogo,
    Account 
} from './styles/header'

export function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = function HeaderWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Logo = function HeaderLogo({children, ...restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}

Header.ImageLogo = function HeaderImageLogo({children, ...restProps}) {
    return <ImageLogo {...restProps} />
}

Header.TextLogo = function HeaderTextLogo({children, ...restProps}) {
    return <TextLogo {...restProps}>{children}</TextLogo>
}

Header.Account = function HeaderAccount({children, ...restProps}) {
    return <Account {...restProps}>{children}</Account>
}
