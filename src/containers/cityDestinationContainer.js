import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { CityDestination } from '../components/cityDestination'
import carIcon from '../../svg/carIcon.svg'
import building from '../../svg/building.svg'

function CityDestinationContainer() {
    const cities = useSelector(state => state.cities)
    return (
        <CityDestination>
            <CityDestination.Fame>
                <CityDestination.Title>
                    <img src={carIcon} alt='Destination'/>
                    <span>Where are you going?</span>
                </CityDestination.Title>
                <CityDestination.Cities>
                    {cities.map(city => 
                        <CityDestination.ListCities key={city.id}>
                            <Link to={`/destination/${city.destination}`}>
                                <img src={building} alt='Building'/>
                                {city.destination}
                            </Link>
                        </CityDestination.ListCities>
                    )}
                </CityDestination.Cities>
            </CityDestination.Fame>
        </CityDestination>
    )
}

export default CityDestinationContainer
