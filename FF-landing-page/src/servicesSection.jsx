import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast,
    faMedal,
    faHeadphones,
    faBurger
 } from '@fortawesome/free-solid-svg-icons';



function ServicesSection() {
    return(
        <>
        <div className="services-section flex justify-center items-around flex-col md:flex-row bg-gray-50 p-20 mx-auto">
            <section className="bg-white py-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-(--accent-color) hover:bg-gray-200 hover:shadow-md  p-6 rounded-lg shadow-md">
                            <FontAwesomeIcon icon={faTruckFast} /> 
                            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                            <p>Get your food delivered to your doorstep in no time.</p>
                        </div>
                        <div className="bg-(--accent-color) hover:bg-gray-200 hover:shadow-md  p-6 rounded-lg shadow-md">
                            <FontAwesomeIcon icon={faMedal} />
                            <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
                            <p>We use only the freshest ingredients in our dishes.</p>
                        </div>
                        <div className="bg-(--accent-color) hover:bg-gray-200 hover:shadow-md  p-6 rounded-lg shadow-md">
                            <FontAwesomeIcon icon={faHeadphones} />
                            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                            <p>Our team is here to assist you with any inquiries.</p>
                        </div>
                        <div className="bg-(--accent-color) hover:bg-gray-200 hover:shadow-md  p-6 rounded-lg shadow-md">
                            <FontAwesomeIcon icon={faBurger} />
                            <h3 className="text-xl font-semibold mb-2">Online Ordering</h3>
                            <p>Order your favorite meals online with ease.</p>
                        </div>
                    </div>
                </div>
            </section>
            <img src="./src/assets/delivery-guy.png" alt="Delivery" className="w-120 h-auto object-cover bg-(--primary-color) rounded-bl-lg rounded-full shadow-lg ml-4" />
        </div>    
        </>
    );
};


export default ServicesSection;