import React from 'react'
import { Header } from '../containers'
import CityDestinationContainer from '../containers/cityDestinationContainer'

function Home() {
    return (
        <>
            <Header /> 
            <div>
                <CityDestinationContainer/>  
            </div>  
        </>
    )
}

export default Home
