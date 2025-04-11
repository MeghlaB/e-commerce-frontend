import Image from "next/image";
import React from "react";

const PopularCategories = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Popular Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-6 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/images19 jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700">
                Bags & Wallets
              </h3>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-6 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/images15.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700">Clothes</h3>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-6 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/images21.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700">
                Perfumes & body mists
              </h3>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-6 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/images17.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700">
                Beauty & Health
              </h3>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-6 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/images16.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700">
                Accessories & Parts
              </h3>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-6 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/images18 (1).jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700">Footwear</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCategories;
