import React from "react";




function ContactUs() {  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Contact <span className="text-(--accent-color)">Us</span>
        </h2>
        <p className="text-gray-500 m-12">We'd love to hear from you!</p>

        <form className="max-w-md mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-(--accent-color) text-black py-3 rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;