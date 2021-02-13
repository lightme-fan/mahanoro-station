import React from 'react'
import { connect, useSelector } from 'react-redux'
import { CityDestination } from '../components/cityDestination'
import { fetchApi } from '../redux/actions/fetchApi';

function CityDestinationContainer({data}) {
    console.log(data);
    const item = useSelector(state => state)
    console.log(item);
    return (
        <CityDestination>
            <CityDestination.Fame>
                <CityDestination.Cities>
                    {/* {data.map(item =>  */}
                        <CityDestination.ListCities>
                            <CityDestination.Button></CityDestination.Button>
                        </CityDestination.ListCities>
                    {/* )} */}
                </CityDestination.Cities>
            </CityDestination.Fame>
        </CityDestination>
    )
}

function mapStateToProps(state) {
    // console.log(dispatch);
    return {
        data: state
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         data: () => dispatch(fetchApi)
//     }
// }

export default connect(mapStateToProps, null)(CityDestinationContainer)
// export default CityDestinationContainer
