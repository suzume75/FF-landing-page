import React from "react";



function Navbar() {
    return (
        
            <>
            <nav className="bg-(--primary-color) shadow-md flex flex-row justify-evenly items-center p-2">
                <img src="./src/assets/logo.png" alt="logo" className="h-15 w-15 inline-block" />
                <div className="flex justify-center items-center p-4">
                <a href="#" className="text-white hover:text-(--accent-color) ml-8 cursor-pointer">Home</a>
                <a href="#" className="text-white hover:text-(--accent-color) ml-8 cursor-pointer">Menu</a>
                <a href="#" className="text-white hover:text-(--accent-color) ml-8 cursor-pointer">Servises</a>
                <a href="#" className="text-white hover:text-(--accent-color) ml-8 cursor-pointer">About Us</a>
                <a href="#" className="text-white hover:text-(--accent-color) ml-8 cursor-pointer">Contact</a>
                </div>
                <button className="bg-(--accent-color) px-5 py-3 rounded-xl text-(--secondary-color)">Order Now</button>
            </nav>
        </>
    )
            };

export default Navbar;