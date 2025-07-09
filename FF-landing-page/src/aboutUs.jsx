import React from "react";



function AboutUs() {
  return (
    <>
    <div className="bg-(--primary-color) md:flex md:flex-row flex-col-reverse items-center justify-center">
  <div className="rounded-xl w-3/4 md:w-2/5 mx-auto my-5 flex flex-col items-center">
    <img
      src="./src/assets/meal.png"
      alt="About Us"
      className="relative mt-4 z-10 w-full  rounded-lg mb-0"
    />
  </div>

  <div className="w-full p-5 bg-(--primary-color) basis-1/2 text-white flex flex-col justify-center h-full">
    <h1 className="text-4xl font-bold mb-4">
      <span className="text-white">About </span>
      <span className="text-(--accent-color)">Us</span>
    </h1>
    <p className="mb-4 text-sm lg:text-xl text-white">
      Welcome to our restaurant! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>

    </>
  );
}

export default AboutUs;