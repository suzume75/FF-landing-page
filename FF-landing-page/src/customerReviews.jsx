import React from "react";


function CustomerReviews() {
  return (
    <>
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12">
          What <span class="text-(--accent-color)">They</span> Say
        </h2>
        <p className="text-gray-500 m-12">(hover)</p>

        <div class="flex gap-6 overflow-x-auto scrollbar-hide px-2">
          <div class="particle-deconstruct-element help w-64 h-64 rounded-xl flex items-center justify-center">
            <img src="https://placehold.co/96x96?text=User" class="rounded-full w-24 h-24 object-cover" alt="Customer" />
            <h2>“Delicious and fast delivery!”</h2>
          </div>

          <div class="particle-deconstruct-element help w-64 h-64 rounded-xl flex items-center justify-center">
            <img src="https://placehold.co/96x96?text=User" class="rounded-full w-24 h-24 object-cover" alt="Customer" />
            <h2>“Highly recommend it!”</h2>
          </div>

          <div class="particle-deconstruct-element help w-64 h-64 rounded-xl flex items-center justify-center">
            <img src="https://placehold.co/96x96?text=User" class="rounded-full w-24 h-24 object-cover" alt="Customer" />
            <h2>“My favorite burger spot.”</h2>
          </div>

          <div class="particle-deconstruct-element help w-64 h-64 rounded-xl flex items-center justify-center">
            <img src="https://placehold.co/96x96?text=User" class="rounded-full w-24 h-24 object-cover" alt="Customer" />
            <h2>“Exceptional taste every time!”</h2>
          </div>

          <div class="particle-deconstruct-element help w-64 h-64 rounded-xl flex items-center justify-center">
            <img src="https://placehold.co/96x96?text=User" class="rounded-full w-24 h-24 object-cover" alt="Customer" />
            <h2>“Amazing value and flavor!”</h2>
          </div>

          <div class="particle-deconstruct-element help w-64 h-64 rounded-xl flex items-center justify-center">
            <img src="https://placehold.co/96x96?text=User" class="rounded-full w-24 h-24 object-cover" alt="Customer" />
            <h2>“Best fast food around!”</h2>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}


export default CustomerReviews;