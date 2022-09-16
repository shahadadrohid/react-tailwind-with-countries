import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';

const CountryDetail = () => {
    const params = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${params.countryName}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [country])
    return (
        <div>
            <h2>Hey Country details Name: {params.countryName}</h2>
            {
                country.map(detail => <CountryDetails detail={detail}></CountryDetails>)
            }
        </div>
    )
};

export default CountryDetail;