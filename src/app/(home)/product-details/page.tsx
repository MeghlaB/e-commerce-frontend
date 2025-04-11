'use-client'
import Image from 'next/image'
import React from 'react'
import { FaShoppingCart, FaCreditCard } from 'react-icons/fa';

function page() {
    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                {/* Image section */}
                <div>
                    <Image
                        src="/images/images12.jpg"
                        alt='product details image'
                        width={600}
                        height={400}
                        className='w-full h-72 rounded-xl shadow-lg'
                    />
                </div>

                {/* Details section */}
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold text-gray-800'>Gadget and Accessories</h2>

                    <p className='text-gray-600 border-b pb-2'>Category: <span className='font-medium'>Gadget</span></p>

                    <p className='text-gray-600 border-b pb-2'>
                        Monotonectally revolutionize cross-media intellectual capital whereas technically sound mindshare.
                        Authoritatively generate wireless web services with leveraged testing procedures.
                        Phosfluorescently myocardinate granular e-services without equity invested.
                    </p>

                    <p className='text-gray-800 font-semibold text-lg border-b pb-2'>
                        Price: <span className='text-green-600'>$50</span>
                    </p>

                    <div className='flex gap-4 pt-4'>
                        <button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition duration-300'>
                            <FaShoppingCart /> Add to Cart
                        </button>

                        <button className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow-md transition duration-300'>
                            <FaCreditCard /> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
