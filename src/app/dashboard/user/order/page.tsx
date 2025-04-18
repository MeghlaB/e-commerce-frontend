"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { useCreateOrder, CreateOrderPayload } from "@/hooks/useOrder";
import { useRouter } from "next/navigation";

const steps = ["Shipping", "Payment", "Review"] as const;

export default function OrderPage() {
  const { cart } = useCart();
  const router = useRouter();
  const createOrder = useCreateOrder();

  const [step, setStep] = useState<0|1|2>(0);
  const [shipping, setShipping] = useState({ name: "", address: "", zip: "" });
  const [payment, setPayment] = useState({ card: "", expiry: "", cvv: "" });

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = 20, vat = 7, discount = 15;
  const total = subtotal - discount + delivery + vat;

  const next = async () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // final: place order
      const payload: CreateOrderPayload = { shipping, payment };
      createOrder.mutate(payload, {
        onSuccess: (order) => {
          router.push(`/order/${order._id}/confirmation`);
        },
      });
    }
  };

  const back = () => step > 0 && setStep(step - 1);

  return (
    <div className="container mx-auto p-6 grid lg:grid-cols-3 gap-8">
      {/* Left column */}
      <div className="lg:col-span-2 space-y-6">
        {/* Progress */}
        <div className="flex">
          {steps.map((label, i) => (
            <div key={i} className="flex-1 text-center">
              <div className={`pb-2 border-b-2 ${i===step?'border-blue-600 font-bold':'border-gray-300 text-gray-500'}`}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Step panes */}
        {step===0 && (
          <div className="bg-white p-6 rounded shadow">
            <h3 className="mb-4 font-semibold">Shipping</h3>
            <input
              placeholder="Name" value={shipping.name}
              onChange={e => setShipping({...shipping,name:e.target.value})}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              placeholder="Address" value={shipping.address}
              onChange={e => setShipping({...shipping,address:e.target.value})}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              placeholder="ZIP Code" value={shipping.zip}
              onChange={e => setShipping({...shipping,zip:e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
        )}
        {step===1 && (
          <div className="bg-white p-6 rounded shadow">
            <h3 className="mb-4 font-semibold">Payment</h3>
            <input
              placeholder="Card Number" value={payment.card}
              onChange={e => setPayment({...payment,card:e.target.value})}
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex gap-3">
              <input
                placeholder="MM/YY" value={payment.expiry}
                onChange={e => setPayment({...payment,expiry:e.target.value})}
                className="flex-1 p-2 border rounded"
              />
              <input
                placeholder="CVV" value={payment.cvv}
                onChange={e => setPayment({...payment,cvv:e.target.value})}
                className="flex-1 p-2 border rounded"
              />
            </div>
          </div>
        )}
        {step===2 && (
          <div className="bg-white p-6 rounded shadow">
            <h3 className="mb-4 font-semibold">Review</h3>
            {cart.map(i=>(
              <div key={i._id} className="flex justify-between py-1">
                <span>{i.name}×{i.quantity}</span>
                <span>${i.price*i.quantity}</span>
              </div>
            ))}
            <hr className="my-4"/>
            <div className="space-y-2">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>-${discount}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>${delivery}</span></div>
              <div className="flex justify-between"><span>VAT</span><span>${vat}</span></div>
              <div className="flex justify-between font-bold"><span>Total</span><span>${total}</span></div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          {step>0 && (
            <button onClick={back} className="px-4 py-2 border rounded hover:bg-gray-100">
              Back
            </button>
          )}
          <button
            onClick={next}
            disabled={createOrder.isLoading}
            className="ml-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {step<2 ? 'Next' : (createOrder.isLoading?'Placing...':'Place Order')}
          </button>
        </div>
      </div>

      {/* Right column: summary */}
      <aside className="space-y-4">
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold mb-3">Summary</h4>
          {cart.map(i=>(
            <div key={i._id} className="flex justify-between py-1">
              <span>{i.name}</span>
              <span>{i.quantity}×${i.price}</span>
            </div>
          ))}
          <hr className="my-3"/>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>-${discount}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>${delivery}</span></div>
            <div className="flex justify-between"><span>VAT</span><span>${vat}</span></div>
          </div>
          <hr className="my-3"/>
          <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${total}</span></div>
        </div>
      </aside>
    </div>
  );
}
