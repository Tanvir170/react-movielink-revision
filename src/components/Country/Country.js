import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, population, name, capital, flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;