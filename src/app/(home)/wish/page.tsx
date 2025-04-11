'use client'
import Image from 'next/image';
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
// import {
//   Table,
//   TableBody,
//   // TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import Image from 'next/image';


function page() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center mb-5'>
        <CiHeart size={70} />
        <h2 className='text-2xl font-bold'>My Wishlist</h2>
      </div>
      {/* table section */}
      {/* <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product Name</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead> Stock Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <div className='flex gap-2 justify-center items-center'>
                <button><MdDeleteOutline size={30} /></button>
                <Image className='w-14 h-20' src="/history.jpg" alt='table image' width={300} height={100}></Image>
                <p>History Image</p>
              </div>
            </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>

        </TableBody>
      </Table> */}

      <div className="overflow-x-auto">
        <div className="max-w-5xl mx-auto"> {/* Centering the table and controlling width */}
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th>Name</th>
                <th>Unit Price</th>
                <th>Stock Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="border-b border-gray-300">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-18">
                      <Image
                        src="/banner1.jpg"
                        alt="Product Image"
                        width={80}
                        height={80}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <div className="font-bold">T-Shirt</div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-semibold">$18</td>
                <td className="text-green-600 font-medium">In Stock</td>
                <td className="flex items-center gap-2">
                  <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-200">
                    <FaCartPlus size={20} />
                    <span>Add to Cart</span>
                  </button>
                  <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-200">
                    <MdDeleteOutline size={20} />
                    <span>Delete Item</span>
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="border-b border-gray-300">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-18">
                      <Image
                        src="/banner1.jpg"
                        alt="Product Image"
                        width={80}
                        height={80}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <div className="font-bold">T-Shirt</div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-semibold">$18</td>
                <td className="text-green-600 font-medium">In Stock</td>
                <td className="flex items-center gap-2">
                  <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-200">
                    <FaCartPlus size={20} />
                    <span>Add to Cart</span>
                  </button>
                  <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-200">
                    <MdDeleteOutline size={20} />
                    <span>Delete Item</span>
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="border-b border-gray-300">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-18">
                      <Image
                        src="/banner1.jpg"
                        alt="Product Image"
                        width={80}
                        height={80}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <div className="font-bold">T-Shirt</div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-semibold">$18</td>
                <td className="text-green-600 font-medium">In Stock</td>
                <td className="flex items-center gap-2">
                  <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-200">
                    <FaCartPlus size={20} />
                    <span>Add to Cart</span>
                  </button>
                  <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-200">
                    <MdDeleteOutline size={20} />
                    <span>Delete Item</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>




    </div>


  )
}

export default page
