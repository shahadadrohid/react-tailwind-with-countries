import React from 'react';

const CountryDetails = (props) => {
    const { name, population, flags, region } = props.detail;
    return (
        <div className='flex justify-center'>
            <div className='w-52 border-4 rounded-lg border-indigo-400 border-double flex justify-center'>
                <div className='m-2'>
                    <img className='w-48' src={flags.png} alt="" />
                    <div className='mt-4 text-justify'>
                        <h2 className='text-2xl font-bold bg-green-200 rounded-lg p-2'>Name: {name.common}</h2>
                        <div className='p-2 bg-green-100 rounded-lg mt-1'>
                            <h3 className='text-xl font-semibold'>Region: {region}</h3>
                            <p className=''>Popultaion: {population}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CountryDetails;