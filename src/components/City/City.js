import React from 'react';
import './city.css';

const City = ({cityData}) => {
    return(
        <div className='city'>
            <img src={`https://flagsapi.com/${cityData.country_code}/flat/64.png`} 
                 alt={cityData.city_name}></img>
            <h2>{cityData.city_name}</h2>
            <div className='describe'>
                <p>{`Temperature: ${cityData.app_temp}`}</p>
                <p>{`Precipation: ${cityData.precip}%`}</p>
                <p>{`Sunrise: ${cityData.sunrise}`}</p>
                <p>{`Sunset: ${cityData.sunset}`}</p>
            </div>
        </div>
    )
}
export default City;