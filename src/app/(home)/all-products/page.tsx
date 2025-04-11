'use-client'
import Image from 'next/image'
import React from 'react'
// import { FaSearch } from 'react-icons/fa'

function page() {
  return (
    <div className='container mx-auto'>
      {/* All Products heading part */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-4">
        {/* Sort by Category */}
        <div className=" w-full md:w-2/5">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
          >
            <option value="">All Category</option>
            <option value="">Bags & Wallets</option>
            <option value="">Clothes</option>
            <option value="">Perfumes & Body Mists</option>
            <option value="">Beauty & Health</option>
            <option value="">Accessories & Parts</option>
            <option value="">Footwear</option>
          </select>
        </div>

        {/* Sort by Price */}
        <div className="w-full md:w-2/5">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by Price
          </label>
          <select
            id="price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
          >
            <option value="">Ascending Order</option>
            <option value="">Descending Order</option>
          </select>
        </div>
      </div>



      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Product 1 */}
        <div className="border rounded-lg p-4 relative bg-white shadow-sm hover:shadow-md transition">
          <div className="relative">
            <Image
              src="/images/image8.jpg"
              alt="Preorder Product"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />
            <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
              Sale
            </span>
            <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
              -34%
            </span>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button className="btn bg-yellow-500 text-black">
              Add to Cart
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Beauty & Health</p>
            <h3 className="font-semibold text-gray-800">Blush Blossom</h3>
            <div className="mt-2 text-lg font-bold text-red-600">
              $19.00{" "}
              <span className="ml-2 line-through text-sm text-gray-400">
                $29.00
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
          <Image
            src="/images/images12.jpg"
            alt="13. Product Media"
            width={300}
            height={300}
            className="mx-auto h-40 object-contain"
          />
          <div className="flex justify-center items-center mt-3">
            <button className="btn bg-yellow-500 text-black">
              Add to Cart
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Gadget and Accessories</p>
            <h3 className="font-semibold text-gray-800">
              Wireless Mouse with LED Lights
            </h3>
            <div className="mt-2 text-lg font-bold text-red-600">$80.00</div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
          <Image
            src="/images/images12.jpg"
            alt="Demo Product"
            width={300}
            height={300}
            className="mx-auto h-40 object-contain"
          />
          <div className="flex justify-center items-center mt-3">
            <button className="btn bg-yellow-500 text-black">
              Add to Cart
            </button>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500">Gadget and Accessories</p>
            <h3 className="font-semibold text-gray-800">
              Wireless Mouse with LED Lights
            </h3>
            <div className="mt-2 text-lg font-bold text-red-600">$29.00</div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
          <Image
            src="/images/images12.jpg"
            alt="Demo Product"
            width={300}
            height={300}
            className="mx-auto h-40 object-contain"
          />
          <div className="flex justify-center items-center mt-3">
            <button className="btn bg-yellow-500 text-black">
              Add to Cart
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Gadget and Accessories</p>
            <h3 className="font-semibold text-gray-800">
              Wireless Mouse with LED Lights
            </h3>
            <div className="mt-2 text-lg font-bold text-red-600">$50.00</div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
          <Image
            src="/images/images12.jpg"
            alt="Demo Product"
            width={300}
            height={300}
            className="mx-auto h-40 object-contain"
          />
          <div className="flex justify-center items-center mt-3">
            <button className="btn bg-yellow-500 text-black">
              Add to Cart
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Gadget and Accessories</p>
            <h3 className="font-semibold text-gray-800">
              Wireless Mouse with LED Lights
            </h3>
            <div className="mt-2 text-lg font-bold text-red-600">$80.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
