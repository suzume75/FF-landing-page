import React from "react";
import { useState } from "react";


function Navbar() {

        const [isOpen, setIsOpen] = useState(false);
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

    return (
        

            <>
            <nav className="bg-(--primary-color) shadow-md ">
                <div className="flex justify-between items-center mx-w-7xl px-4">
                <img src="./src/assets/logo.png" alt="logo" className="h-15 w-15 md:hidden" />
                <svg 
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 50 50"
                fill="#fff"
                className="cursor-pointer text-gray-200 bg-gray-600 p-1 rounded-l w-8 h-8 md:hidden lg:hidden xl:hidden 2xl:hidden"
                >
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
                </div>
                {isOpen && (<div  className="flex items-center justify-center flex-col">
                <a href="#" className="text-white my-1 border-1 border-(--accent-color) w-1/2 text-center rounded-l hover:text-(--accent-color) hover:opacity-70 cursor-pointer">Home</a>
                <a href="#" className="text-white my-1 border-1 border-(--accent-color) w-1/2 text-center rounded-l hover:text-(--accent-color) hover:opacity-70 cursor-pointer">Menu</a>
                <a href="#" className="text-white my-1 border-1 border-(--accent-color) w-1/2 text-center rounded-l hover:text-(--accent-color) hover:opacity-70 cursor-pointer">Servises</a>
                <a href="#" className="text-white my-1 border-1 border-(--accent-color) w-1/2 text-center rounded-l hover:text-(--accent-color) hover:opacity-70 cursor-pointer">About Us</a>
                <a href="#" className="text-white my-1 border-1 border-(--accent-color) w-1/2 text-center rounded-l hover:text-(--accent-color) hover:opacity-70 cursor-pointer">Contact</a>
                <button className="bg-(--accent-color) mx-4 my-4 px-5 py-3 rounded-xl text-bllack hover:bg-black hover:text-white">Order Now</button>
                </div>)}


                <div className="hidden md:px-8 md:flex lg:flex xl:flex 2xl:flex md:items-center md:justify-between md:p-2">
                    <img src="./src/assets/logo.png" alt="logo" className="h-15 w-15" />
                    <a href="#" className="text-white mx-4 text-center hover:text-(--accent-color) cursor-pointer">Home</a>
                    <a href="#" className="text-white mx-4 text-center hover:text-(--accent-color) cursor-pointer">Menu</a>
                    <a href="#" className="text-white mx-4 text-center hover:text-(--accent-color) cursor-pointer">Servises</a>
                    <a href="#" className="text-white mx-4 text-center hover:text-(--accent-color) cursor-pointer">About Us</a>
                    <a href="#" className="text-white mx-4 text-center hover:text-(--accent-color) cursor-pointer">Contact</a>
                    <button className="bg-(--accent-color) mx-4 my-2 px-5 py-3 rounded-xl text-(--secondary-color) hover:bg-black hover:text-white">Order Now</button>
            </div>
            </nav>

        </>
    )
            };

export default Navbar;