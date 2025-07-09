import React from "react";


function CustomerReviews() {
  return (
    <>
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          What <span className="text-(--accent-color)">They</span> Say
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2">

          <div className="bg-(--primary-color) rounded-xl border-2 border-(--accent-color) min-w-64 min-h-64  particle-deconstruct-element help lg:w-64 lg:h-64 lg:rounded-xl lg:flex lg:items-center lg:justify-center">
            <img src="https://placehold.co/96x96?text=User" className="hidden lg:block lg:rounded-full lg:w-24 lg:h-24 lg:object-cover" alt="Customer" />
            <h2 >“Delicious and fast delivery!”</h2>
            <h3 className="lg:hidden text-white font-xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">“Delicious and fast delivery!”</h3>
          </div>

          <div className="bg-(--primary-color) rounded-xl border-2 border-(--accent-color) min-w-64 min-h-64  particle-deconstruct-element help lg:w-64 lg:h-64 lg:rounded-xl lg:flex lg:items-center lg:justify-center">
            <img src="https://placehold.co/96x96?text=User" className="hidden lg:block lg:rounded-full lg:w-24 lg:h-24 lg:object-cover" alt="Customer" />
            <h2>“Highly recommend it!”</h2>
            <h3 className="lg:hidden text-white font-xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">“Highly recommend it!”</h3>

          </div>

          <div className="bg-(--primary-color) rounded-xl border-2 border-(--accent-color) min-w-64 min-h-64  particle-deconstruct-element help lg:w-64 lg:h-64 lg:rounded-xl lg:flex lg:items-center lg:justify-center">
            <img src="https://placehold.co/96x96?text=User" className="hidden lg:block lg:rounded-full lg:w-24 lg:h-24 lg:object-cover" alt="Customer" />
            <h2>“My favorite burger spot.”</h2>
            <h3 className="lg:hidden text-white font-xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">“My favorite burger spot.”</h3>
          </div>

          <div className="bg-(--primary-color) rounded-xl border-2 border-(--accent-color) min-w-64 min-h-64  particle-deconstruct-element help lg:w-64 lg:h-64 lg:rounded-xl lg:flex lg:items-center lg:justify-center">
            <img src="https://placehold.co/96x96?text=User" className="hidden lg:block lg:rounded-full lg:w-24 lg:h-24 lg:object-cover" alt="Customer" />
            <h2>“Exceptional taste every time!”</h2>
            <h3 className="lg:hidden text-white font-xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">“Exceptional taste every time!”</h3>
          </div>

          <div className="bg-(--primary-color) rounded-xl border-2 border-(--accent-color) min-w-64 min-h-64  particle-deconstruct-element help lg:w-64 lg:h-64 lg:rounded-xl lg:flex lg:items-center lg:justify-center">
            <img src="https://placehold.co/96x96?text=User" className="hidden lg:block lg:rounded-full lg:w-24 lg:h-24 lg:object-cover" alt="Customer" />
            <h2>“Amazing value and flavor!”</h2>
            <h3 className="lg:hidden text-white font-xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">“Amazing value and flavor!”</h3>
          </div>

          <div className="bg-(--primary-color) rounded-xl border-2 border-(--accent-color) min-w-64 min-h-64  particle-deconstruct-element help lg:w-64 lg:h-64 lg:rounded-xl lg:flex lg:items-center lg:justify-center">
            <img src="https://placehold.co/96x96?text=User" className="hidden lg:block lg:rounded-full lg:w-24 lg:h-24 lg:object-cover" alt="Customer" />
            <h2>“Best fast food around!”</h2>
            <h3 className="lg:hidden text-white font-xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">“Best fast food around!”</h3>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}


export default CustomerReviews;