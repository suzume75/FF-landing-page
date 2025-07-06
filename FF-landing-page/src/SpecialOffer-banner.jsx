import React from "react";



function SpecialOfferBanner() {
    return (
        <div className="mx-auto my-20 w-full min-h-[400px] flex fjustify-center align-between bg-(--primary-color) rounded-lg  shadow-lg">
  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center z-10">
    <h2 className="text-3xl font-extrabold text-white text-center">Today's special</h2>
    <h1 className="text-4xl font-extrabold text-(--accent-color) my-4 text-center">Surprise for you!</h1>
    <p className="mb-6 text-gray-200 text-center">Get our best burger now at a special price!</p>
    <div className="flex justify-around items-center mx-10">
    <span className="text-6xl font-extrabold text-(--accent-color)">40$</span>
    <button className="bg-(--accent-color) text-black px-6 py-3 rounded font-semibold hover:bg-black hover:text-white transition">
      Order Now
    </button>
    </div>
  </div>

  
  <div className="relative w-full md:w-1/2 min-h-[400px] flex items-center justify-center">
    
    <svg 
    className="w-full h-full absolute top-0 left-0 z-0"
    viewBox="0 0 382.5 382.5" x
    mlns="http://www.w3.org/2000/svg">
        <path d="M191.25,317.07232676462314C255.47636456014487,317.07232676462314,297.15777388535736,255.47636456014487,297.15777388535736,191.25C297.15777388535736,129.8002293305251,252.6997706694749,74.87479155443988,191.25,74.8747915544399C104.25126159273206,74.87479155443991,1.289064487685799,104.25126159273204,1.289064487685815,191.24999999999997C1.2890644876858206,280.23163896972125,102.26836103027874,317.07232676462314,191.25,317.07232676462314" fill="#FFB700" />
    </svg>

    
    <img
      src="./src/assets/burger.png"
      alt="Burger"
      className="relative z-10 w-64 h-auto md:w-[320px]"
    />

    
    <span className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full  animate-bounce"></span>
    <span className="absolute bottom-6 left-6 w-6 h-6 bg-gray-500 rounded-full  animate-pulse"></span>
    <span className="absolute bottom-6 right-6 w-4 h-4 bg-(--accent-color) rounded-full opacity-40 animate-ping"></span>
  </div>
</div>


    );
}

export default SpecialOfferBanner;