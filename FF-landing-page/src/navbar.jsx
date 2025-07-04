import React from "react";



function Navbar() {
    return (
        
            <>
            <nav className="bg-white shadow-md flex flex-row justify-evenly items-center p-2">
                <img src="./src/assets/logo.png" alt="logo" className="h-15 w-15 inline-block" />
                <div className="flex justify-center items-center p-4">
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-8">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-8">Menu</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-8">Servises</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-8">About Us</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-8">Contact</a>
                </div>
                <button href="#" className="bg-(--accent-color) px-5 py-3 rounded-xl text-(--secondary-color)">Order Now</button>
            </nav>
        </>
    )
            };

export default Navbar;