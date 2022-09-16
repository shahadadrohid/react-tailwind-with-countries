import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h2 className='text-4xl bg-green-300 p-2 text-black font-semibold text-indigo-500'>Welcome to all countries information</h2>
            <p className='text-xl p-5 font-semibold'>Want to see all countries information,
                then click <div className='text-blue-500 inline'><Link to="/countries">here.</Link></div>
            </p>
        </div>
    );
};

export default Home;