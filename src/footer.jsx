import React from "react";


function Footer() {
  return (
    <>
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-xs">&copy; 2025. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-(--accent-color) text-xs">FAQ</a>
            <a href="#" className="hover:text-(--accent-color) text-xs">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;