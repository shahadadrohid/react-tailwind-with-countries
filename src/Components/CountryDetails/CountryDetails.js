import React from 'react';

const CountryDetails = (props) => {
    const [name, flags, population, region] = props.detail;
    return (
        <div className='flex justify-center'>
            <div className='w-52 border-2 border-indigo-400 border-dashed flex justify-center'>
                <div className='m-2'>
                    <img className='w-48' src={flags.png} alt="" />
                    <h2 className='text-2xl font-semibold'>Name: {name.common}</h2>
                    <h3>Region: {region}</h3>
                    <h4 className='text-xl'>{population}</h4>
                </div>
            </div>
        </div >
    );
};

export default CountryDetails;