'use client'

import Image from "next/image"

function page() {
  return (
    <div className="grid grid-cols-3 gap-5 container mx-auto px-4 mb-4">
      {/* Left Side  */}
      <section className="col-span-2">
        {/* Saved Address */}
        <div className="bg-white border border-gray-200 rounded-md shadow-sm flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold text-gray-700">From Saved Address</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Enter Delivery Pincode
          </button>
        </div>

        {/* Cart Item 1*/}
        <div className="bg-white border border-gray-200 rounded-md shadow-md mt-4 p-4">
          <div className="flex gap-6">
            <Image
              src="/about1.webp"
              alt="Cart Image"
              width={160}
              height={160}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Stylish T-Shirt</h2>
                <p className="text-gray-600 mt-1">Price: <span className="text-gray-800 font-medium">$12</span></p>
              </div>

              {/* quantity Fields */}
              <div className="flex items-center gap-4 mt-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded w-fit overflow-hidden">
                    <button
                      type="button"
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-gray-800">1</span>
                    <button
                      type="button"
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>


                <div>
                  <label className="text-sm text-gray-500">Size</label>
                  <select className="block border border-gray-300 rounded px-3 py-1 mt-1">
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                  </select>
                </div>

                <button className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Item 2*/}
        <div className="bg-white border border-gray-200 rounded-md shadow-md mt-4 p-4">
          <div className="flex gap-6">
            <Image
              src="/about1.webp"
              alt="Cart Image"
              width={160}
              height={160}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Stylish T-Shirt</h2>
                <p className="text-gray-600 mt-1">Price: <span className="text-gray-800 font-medium">$12</span></p>
              </div>

              {/* Extra Fields */}
              <div className="flex items-center gap-4 mt-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded w-fit overflow-hidden">
                    <button
                      type="button"
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-gray-800">1</span>
                    <button
                      type="button"
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>


                <div>
                  <label className="text-sm text-gray-500">Size</label>
                  <select className="block border border-gray-300 rounded px-3 py-1 mt-1">
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                  </select>
                </div>

                <button className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Item 3*/}
        <div className="bg-white border border-gray-200 rounded-md shadow-md mt-4 p-4">
          <div className="flex gap-6">
            <Image
              src="/about1.webp"
              alt="Cart Image"
              width={160}
              height={160}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Stylish T-Shirt</h2>
                <p className="text-gray-600 mt-1">Price: <span className="text-gray-800 font-medium">$12</span></p>
              </div>

              {/* Extra Fields */}
              <div className="flex items-center gap-4 mt-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded w-fit overflow-hidden">
                    <button
                      type="button"
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-gray-800">1</span>
                    <button
                      type="button"
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>


                <div>
                  <label className="text-sm text-gray-500">Size</label>
                  <select className="block border border-gray-300 rounded px-3 py-1 mt-1">
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                  </select>
                </div>

                <button className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>


      </section>



      {/* Right side */}
      <section className="bg-white border rounded-lg shadow-md w-full max-w-md mx-auto h-[360px]">
        <h2 className="p-4 text-xl font-semibold text-gray-800 border-b">Price Details</h2>
        <div className="p-4 space-y-3">

          <div className="flex justify-between">
            <p className="text-gray-600">Price:</p>
            <p className="text-gray-800 font-medium">$150</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">Discount Price:</p>
            <p className="text-red-600 font-medium">- $15</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">Delivery Charge:</p>
            <p className="text-gray-800 font-medium">$20</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">VAT:</p>
            <p className="text-gray-800 font-medium">$7</p>
          </div>

          <hr />

          <div className="flex justify-between font-bold text-lg pt-3">
            <p className="text-gray-700">Total Price:</p>
            <p className="text-gray-900">$162</p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default page
