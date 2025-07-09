import React from "react";
import ItemCard from "./menu/itemCard";

function Menu() {
  return (
    <div className="menu mx-w-7xl mx-auto my-10 h-full">
      <h1 className="md:text-4xl md:font-extrabold md:text-center md:my-8 font-extrabold text-center text-2xl">Our Menu</h1>
      <div className="flex gap-6 overflow-x-auto px-4 py-6 scrollbar-hide">
        <ItemCard
          title="Pasta"
          description="Creamy Alfredo with mushrooms"
          image="./src/assets/pasta.jpeg"
          price="55"
        />
        <ItemCard
          title="Burger"
          description="Juicy beef burger with cheese"
          image="./src/assets/burger.jpeg"
          price="45"
        />
        <ItemCard
          title="Pizza"
          description="Cheesy margherita with tomatoes"
          image="./src/assets/pizza.jpeg"
          price="60"
        />
        <ItemCard
          title="Salad"
          description="Fresh garden salad"
          image="./src/assets/salad.jpeg"
          price="35"
        />
        <ItemCard
          title="Tacos"
          description="Spicy chicken tacos"
          image="./src/assets/tacos.jpeg"
          price="50"
        />
        <ItemCard
          title="Burrito"
          description="Beef burrito with beans and rice"
          image="./src/assets/burrito.jpeg"
          price="60"
        />
      </div>
    </div>
  );
}

export default Menu;
