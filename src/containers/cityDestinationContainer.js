import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { CityDestination } from '../components/cityDestination'

function CityDestinationContainer() {
    const cities = useSelector(state => state.cities)
    return (
        <CityDestination>
            <CityDestination.Fame>
                <CityDestination.Title>
                    Where are you going?
                </CityDestination.Title>
                <CityDestination.Cities>
                    {cities.map(city => 
                        <CityDestination.ListCities key={city.id}>
                            <Link to={`/${city.destination}`}>{city.destination}</Link>
                        </CityDestination.ListCities>
                    )}
                </CityDestination.Cities>
            </CityDestination.Fame>
        </CityDestination>
    )
}

export default CityDestinationContainer
