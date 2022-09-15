import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 bg-green-200 p-4'>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;