'use-client'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="bg-white rounded-2xl shadow-md px-6 py-4 w-[500px] mx-auto text-center space-y-2">
      <Image
        src="/images/image4.jpg"
        alt="user profile"
        width={140}
        height={140}
        className="w-36 h-36 rounded-full mx-auto object-cover"
      />
      <p className="inline-block px-3 py-1 bg-[#F0B100] text-sm rounded-full text-white font-semibold">Seller</p>
      <p className="text-sm text-gray-600">User ID: <span className="font-mono ">O3W1RXuDabUo4lvV65kPMYXPb5p2</span></p>

      <div className="text-left space-y-1 px-4">
        <h2 className="font-semibold">Name: <span className="font-normal">KinboBD</span></h2>
        <h2 className="font-semibold">Email: <span className="font-normal">kinboBd@gmail.com</span></h2>
      </div>
      <div className="flex flex-col items-center space-y-2 pt-2">
        <button className="w-40 py-2 bg-[#F0B100] text-white rounded-full hover:bg-[#d39c00] transition-all">
          Change Password
        </button>
        <button className="w-40 py-2 bg-[#F0B100] text-white rounded-full hover:bg-[#d39c00] transition-all">
          Update Profile
        </button>
      </div>

    </div>


  )
}

export default page
