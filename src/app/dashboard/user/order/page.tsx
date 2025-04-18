"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";

const steps = ["Shipping", "Payment", "Review"] as const;

export default function OrderPage() {
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState<0|1|2>(0);

  // Form state
  const [shipping, setShipping] = useState({ name: "", address: "", zip: "" });
  const [payment, setPayment] = useState({ card: "", expiry: "", cvv: "" });

  const totalItemsPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = 20, vat = 7, discount = 15;
  const totalPrice = totalItemsPrice - discount + delivery + vat; // simplified

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
    else {
      // submit order to backend, then redirect to confirmation
      // e.g. fetch('/api/orders', { method:'POST', body: cart... })
    }
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Step Forms */}
      <div className="lg:col-span-2 space-y-6">
        {/* Progress Indicator */}
        <div className="flex items-center">
          {steps.map((label, i) => (
            <div key={label} className="flex-1">
              <div
                className={`text-center pb-2 border-b-2 ${
                  i === currentStep
                    ? "border-blue-600 font-bold"
                    : "border-gray-300 text-gray-500"
                }`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Step Content */}
        {currentStep === 0 && (
          <div className="bg-white p-6 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
                value={shipping.name}
                onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border p-2 rounded"
                value={shipping.address}
                onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
              />
              <input
                type="text"
                placeholder="ZIP / Postal Code"
                className="w-full border p-2 rounded"
                value={shipping.zip}
                onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
              />
            </form>
          </div>
        )}

        {currentStep === 1 && (
          <div className="bg-white p-6 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border p-2 rounded"
                value={payment.card}
                onChange={(e) => setPayment({ ...payment, card: e.target.value })}
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  className="flex-1 border p-2 rounded"
                  value={payment.expiry}
                  onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="flex-1 border p-2 rounded"
                  value={payment.cvv}
                  onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                />
              </div>
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-white p-6 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between py-2">
                <span>{item.name} × {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="mt-4 border-t pt-4 space-y-2">
              <div className="flex justify-between"><span>Subtotal</span><span>${totalItemsPrice}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>- ${discount}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>${delivery}</span></div>
              <div className="flex justify-between"><span>VAT</span><span>${vat}</span></div>
              <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${totalPrice}</span></div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-2 border rounded hover:bg-gray-100 transition"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="ml-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {currentStep < 2 ? "Next" : "Place Order"}
          </button>
        </div>
      </div>

      {/* Right: Persistent Order Summary */}
      <aside className="space-y-4">
        <div className="bg-white p-6 rounded-md shadow">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between py-2">
              <span>{item.name}</span>
              <span>
                {item.quantity}×${item.price.toFixed(2)}
              </span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="space-y-2">
            <div className="flex justify-between"><span>Subtotal</span><span>${totalItemsPrice}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>- ${discount}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>${delivery}</span></div>
            <div className="flex justify-between"><span>VAT</span><span>${vat}</span></div>
            <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${totalPrice}</span></div>
          </div>
        </div>
      </aside>
    </div>
);
}
