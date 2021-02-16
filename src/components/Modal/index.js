import React from 'react'
import {
    Container,
    Wrapper,
    Heading,
    Title,
    Logo,
    Text,
    ComfirmButton,
} from './styles/Modal'

function Modal({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Modal.Wrapper = function ModalWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Modal.Heading = function ModalHeading({children, ...restProps}) {
    return <Heading {...restProps}>{children}</Heading>
}

Modal.Title = function ModalTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Modal.Logo = function ModalLogo({children, ...restProps}) {
    return <Logo {...restProps} />
}

Modal.Text = function ModalText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Modal.ComfirmButton = function ModalComfirmButton({children, ...restProps}) {
    return <ComfirmButton {...restProps}>{children}</ComfirmButton>
}

export default Modal
