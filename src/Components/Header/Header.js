import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-green-500'>
            <div className='md:hidden w-8 h-8' onClick={() => setOpen(!open)}>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3BottomRightIcon></Bars3BottomRightIcon>}
            </div>

            <ul className={`md:flex justify-center rounded-lg w-full bg-green-500 absolute md:static duration-700 ${open ? 'left-0' : 'left-[-1000px]'}`}>

                <li className='mx-16 my-2 
                md:mx-4 md:my-4 bg-green-300 
                md:px-5 p-2 font-semibold text-black rounded-lg'>
                    <Link to="/">Home
                    </Link></li>

                <li className='mx-16 my-2 
                md:mx-4 md:my-4 bg-green-300 
                md:px-5 p-2 font-semibold text-black rounded-lg'>
                    <Link to="/countries">Countries
                    </Link></li>

                <li className='mx-16 my-2 
                md:mx-4 md:my-4 bg-green-300 
                md:px-5 p-2 font-semibold text-black rounded-lg'>
                    <Link to="/about">About
                    </Link></li>

                <li className='mx-16 my-2 
                md:mx-4 md:my-4 bg-green-300 
                md:px-5 p-2 font-semibold text-black rounded-lg'>
                    <Link to="/contact"
                    >Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;