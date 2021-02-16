import React from 'react'

import { 
  Container,
  Wrapper,
  Header,
  Detail,
  Title,
  Logo,
  Choices,
  TripInfo,
 } from './styles/bookSeatsStyles'

export function BookSeat({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

BookSeat.Wrapper = function BookSeatWrapper ({ children, ...restProps }) {
  return <Wrapper { ...restProps }>{ children }</Wrapper>
}
BookSeat.Header = function BookSeatHeader ({ children, ...restProps }) {
  return <Header { ...restProps }>{ children }</Header>
}

BookSeat.Detail = function BookSeatDetail ({ children, ...restProps }) {
  return <Detail { ...restProps }>{ children }</Detail>
}

BookSeat.Title = function BookSeatTitle ({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

BookSeat.Choices = function BookSeatChoices ({ children, ...restProps }) {
  return <Choices { ...restProps }>{ children }</Choices>
}

BookSeat.TripInfo = function BookSeatTripInfo ({ children, ...restProps }) {
  return <TripInfo { ...restProps }>{ children }</TripInfo>
}

BookSeat.Logo = function BookSeatLogo ({ children, ...restProps }) {
  return <Logo { ...restProps } />
}

BookSeat.Modal = function BookSeatModal ({ children, ...restProps }) {
  return <Modal { ...restProps }>{ children }</Modal>
}

BookSeat.ModalWarning = function BookSeatModalWarning ({ children, ...restProps }) {
  return <ModalWarning { ...restProps }>{ children }</ModalWarning>
}

BookSeat.ModalText = function BookSeatModalText ({ children, ...restProps }) {
  return <ModalText { ...restProps }>{ children }</ModalText>
}

