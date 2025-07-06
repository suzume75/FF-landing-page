import React from "react";



function AboutUs() {
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-(--primary-color) text-white">
  <div className="rounded-xl bg-(--accent-color) w-3/4 md:w-1/2 lg:w-1/3 p-8 shadow-lg flex flex-col items-center justify-center relative">
    <img
      src="./src/assets/meal.png"
      alt="About Us"
      className="relative z-10 object-contain w-full h-64 rounded-lg shadow-md mb-6"
    />
  </div>

  {/* Right Side: About Us Text */}
  <div className="w-full p-10 bg-(--primary-color) basis-1/2 text-white flex flex-col justify-center h-full">
    <h1 className="text-4xl font-bold mb-4">
      <span className="text-white">About </span>
      <span className="text-(--accent-color)">Us</span>
    </h1>
    <p className="mb-4 text-lg text-white">
      Welcome to our restaurant! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p className="text-lg text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>

    </>
  );
}

export default AboutUs;