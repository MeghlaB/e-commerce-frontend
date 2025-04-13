'use-client'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'


function page() {
  return (
    <div className="shadow-md rounded-2xl bg-white p-4 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 text-gray-700">
            <TableHead className="px-4 py-2">Image</TableHead>
            <TableHead className="px-4 py-2">Name</TableHead>
            <TableHead className="px-4 py-2">Category</TableHead>
            <TableHead className="px-4 py-2">Price</TableHead>
            <TableHead className="px-4 py-2">Quantity</TableHead>
            <TableHead className="px-4 py-2">Status</TableHead>
            <TableHead className="px-4 py-2">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Row 1 */}
          <TableRow className="hover:bg-gray-50 transition-all duration-200">
            <TableCell className="px-4 py-2">
              <Image src="/images/image10.jpg" alt="order image" width={200} height={100} className="w-20 h-16 rounded-xl object-cover border" />
            </TableCell>
            <TableCell className="px-4 py-2 font-medium text-gray-800">iPhone</TableCell>
            <TableCell className="px-4 py-2 text-sm text-gray-600">Gadget & Accessories</TableCell>
            <TableCell className="px-4 py-2 text-green-600 font-semibold">$250.00</TableCell>
            <TableCell className="px-4 py-2">2</TableCell>
            <TableCell className="px-4 py-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
            </TableCell>
            <TableCell className="px-4 py-2">
              <button className="px-3 py-1 text-sm bg-red-100 text-red-600 hover:bg-red-200 transition rounded-full">Cancel</button>
            </TableCell>
          </TableRow>
          {/* Row 2 */}
          <TableRow className="hover:bg-gray-50 transition-all duration-200">
            <TableCell className="px-4 py-2">
              <Image src="/images/images20.jpg" alt="order image" width={200} height={100} className="w-20 h-16 rounded-xl object-cover border" />
            </TableCell>
            <TableCell className="px-4 py-2 font-medium text-gray-800">iPhone</TableCell>
            <TableCell className="px-4 py-2 text-sm text-gray-600">Gadget & Accessories</TableCell>
            <TableCell className="px-4 py-2 text-green-600 font-semibold">$250.00</TableCell>
            <TableCell className="px-4 py-2">2</TableCell>
            <TableCell className="px-4 py-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
            </TableCell>
            <TableCell className="px-4 py-2">
              <button className="px-3 py-1 text-sm bg-red-100 text-red-600 hover:bg-red-200 transition rounded-full">Cancel</button>
            </TableCell>
          </TableRow>
          {/* Row 3 */}
          <TableRow className="hover:bg-gray-50 transition-all duration-200">
            <TableCell className="px-4 py-2">
              <Image src="/images/images20.jpg" alt="order image" width={200} height={100} className="w-20 h-16 rounded-xl object-cover border" />
            </TableCell>
            <TableCell className="px-4 py-2 font-medium text-gray-800">iPhone</TableCell>
            <TableCell className="px-4 py-2 text-sm text-gray-600">Gadget & Accessories</TableCell>
            <TableCell className="px-4 py-2 text-green-600 font-semibold">$250.00</TableCell>
            <TableCell className="px-4 py-2">2</TableCell>
            <TableCell className="px-4 py-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
            </TableCell>
            <TableCell className="px-4 py-2">
              <button className="px-3 py-1 text-sm bg-red-100 text-red-600 hover:bg-red-200 transition rounded-full">Cancel</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

  )
}

export default page
