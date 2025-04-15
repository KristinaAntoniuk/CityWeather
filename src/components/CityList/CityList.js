import React from 'react';
import City from '../City/City';
import './citylist.css';

const CityList = ({cities}) => {
    return (
        <div className='citylist'>
            {
                 cities.map(city => <City key={city.city_name} cityData = {city} />)
            }
        </div>
    )
}
export default CityList;