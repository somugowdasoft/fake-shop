import React from 'react'
import logo from "../assets/logo.png";
import { ShoppingCartIcon } from '@heroicons/react/16/solid';

function NavBar({ setIsModalOpen , cartCount }) {
    return (
        <nav className='bg-custom-gradient flex justify-between items-center sticky top-0'>
            <a href='/'>
                <img
                    src={logo}
                    alt="Store Logo"
                    className="h-20 w-20 mr-2 flex items-center"
                />
            </a>

            <button onClick={() => setIsModalOpen(true)} className="relative flex items-center text-white mr-3">
                <ShoppingCartIcon className="h-10 w-10" />
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-custom-gradient rounded-full h-6 w-6 text-xs flex items-center justify-center">
                        {cartCount}
                    </span>
                )}
            </button>
        </nav>
    )
}

export default NavBar;