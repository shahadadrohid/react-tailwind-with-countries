import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const { name, population, flags } = props.country;
    return (
        <div className='flex justify-center'>
            <div className='w-52 border-2 border-indigo-400 border-dashed flex justify-center'>
                <div className='m-2'>
                    <img className='w-48' src={flags.png} alt="" />
                    <h2 className='text-2xl font-semibold'>{name.common}</h2>
                    <h4 className='text-xl'>{population}</h4>
                    <button className='bg-green-500 hover:bg-green-300 hover:text-black hover:font-semibold px-4 py-2 rounded'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Country;