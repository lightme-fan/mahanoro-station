import React from 'react'

import { 
    Container,
    Fame,
    Title,
    Cities,
    ListCities,
    Button
} from './styles/cityDestination'

export function CityDestination({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

CityDestination.Fame = function CityDestinationFame({children, ...restProps}) {
    return <Fame {...restProps}>{children}</Fame>
}

CityDestination.Title = function CityDestinationTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

CityDestination.Cities = function CityDestinationCities({children, ...restProps}) {
    return <Cities {...restProps}>{children}</Cities>
}

CityDestination.ListCities = function CityDestinationListCities({children, ...restProps}) {
    return <ListCities {...restProps}>{children}</ListCities>
}

CityDestination.Button = function CityDestinationButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

