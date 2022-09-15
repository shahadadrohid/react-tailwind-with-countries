import React, { useState } from 'react';
import { useEffect } from 'react';

const CountryDetail = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/name/peru')
    }, [])
    return (
        <div>

        </div>
    );
};

export default CountryDetail;