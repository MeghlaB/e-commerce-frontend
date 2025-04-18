"use client";

import Image from "next/image";
import { useCart } from "@/hooks/useCart"; // ✅ Import your cart hook
import { useRouter } from "next/navigation";

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart(); // ✅ Include updateQuantity
  const router = useRouter();
  const deliveryCharge = 20;
  const vat = 7;
  const discount = 15;

  const totalItemsPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalPrice = totalItemsPrice - discount + deliveryCharge + vat;


  return (
    <div className="grid grid-cols-3 gap-5 container mx-auto px-4 mb-4">
      {/* Left Side */}
      <section className="col-span-2">
        {/* Saved Address */}
        <div className="bg-white border border-gray-200 rounded-md shadow-sm flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold text-gray-700">From Saved Address</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Enter Delivery Pincode
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="mt-6 text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-200 rounded-md shadow-md mt-4 p-4"
            >
              <div className="flex gap-6">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="rounded-md object-cover"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Price:{" "}
                      <span className="text-gray-800 font-medium">
                        ${item.price}
                      </span>
                    </p>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-4 mt-4">
                    <div>
                      <label className="text-sm text-gray-500 mb-1 block">
                        Quantity
                      </label>
                      <div className="flex items-center border border-gray-300 rounded w-fit overflow-hidden">
                        <button
                          type="button"
                          onClick={() =>
                            item.quantity > 1 &&
                            updateQuantity(item._id, item.quantity - 1)
                          }
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item._id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Right Side - Price Details */}
      <section className="bg-white border rounded-lg shadow-md w-full max-w-md mx-auto h-fit">
        <h2 className="p-4 text-xl font-semibold text-gray-800 border-b">
          Price Details
        </h2>
        <div className="p-4 space-y-3">
          <div className="flex justify-between">
            <p className="text-gray-600">Price:</p>
            <p className="text-gray-800 font-medium">${totalItemsPrice}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">Discount:</p>
            <p className="text-red-600 font-medium">- ${discount}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">Delivery Charge:</p>
            <p className="text-gray-800 font-medium">${deliveryCharge}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-600">VAT:</p>
            <p className="text-gray-800 font-medium">${vat}</p>
          </div>

          <hr />

          <div className="flex justify-between font-bold text-lg pt-3">
            <p className="text-gray-700">Total Price:</p>
            <p className="text-gray-900">${totalPrice}</p>
          </div>
        </div>
        <div className="p-4">
          <button
            onClick={() => router.push("/dashboard/user/order")}
            className="w-full mt-4 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
