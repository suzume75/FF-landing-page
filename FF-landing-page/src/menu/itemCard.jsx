import React from "react";

function ItemCard({ title, description, image, price = "9.99" }) {
  return (
    <div className="min-w-[250px] bg-white shadow-lg rounded-lg p-4 flex-shrink-0">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">{price}$</span>
        <button className="bg-[var(--accent-color)] px-4 py-2 rounded-lg text-[var(--secondary-color)] hover:!bg-black transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
