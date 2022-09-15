import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-green-500'>
            <div className='md:hidden w-8 h-8' onClick={() => setOpen(!open)}>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3BottomRightIcon></Bars3BottomRightIcon>}
            </div>

            <ul className={`md:flex justify-center rounded-lg w-full bg-green-500 absolute md:static duration-700 ${open ? 'left-0' : 'left-[-1000px]'}`}>
                <li className='mx-16 my-2 md:mx-4 md:my-4 bg-green-300 md:px-5 p-2 font-semibold text-black rounded-lg'><a href="">Home</a></li>
                <li className='mx-16 my-2 md:mx-4 md:my-4 bg-green-300 md:px-5 p-2 font-semibold text-black rounded-lg'><a href="">Countries</a></li>
                <li className='mx-16 my-2 md:mx-4 md:my-4 bg-green-300 md:px-5 p-2 font-semibold text-black rounded-lg'><a href="">About</a></li>
                <li className='mx-16 my-2 md:mx-4 md:my-4 bg-green-300 md:px-5 p-2 font-semibold text-black rounded-lg'><a href="">Contact</a></li>
            </ul>
            {/* 
                <ul className={`mt-2 absolute duration-700 bg-green-600 p-8 ${open ? 'top-8' : 'top-[-120px]'}`}>
                </ul> */}
        </nav >
    );
};

export default Header;