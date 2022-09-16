import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';

const CountryDetail = () => {
    const params = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${params.countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [country])
    return (
        <div className='mt-4'>
            {
                country.map(detail => <CountryDetails
                    key={detail.cca3}
                    detail={detail}
                ></CountryDetails>)
            }
        </div>
    )
};

export default CountryDetail;