import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <div className='container mx-auto'>
      {/* <section className="bg-blue-50 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
          <p className="mt-2 text-gray-600">
            We'd love to hear from you. Please fill out the form below and we'll get back to you shortly.
          </p>
        </div>
      </section> */}

      <div className='my-5 flex gap-4'>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 "
        >
          Home
        </Link>/ <p className='text-amber-500'>Contact</p>
      </div>

      {/* contact us section */}
      <section
        id="contact"
        className=" h-auto p-10 bg-white text-gray-800"
      >
        <div className="text-center mb-8">
          <p className="text-gray-500">Contact</p>
          <h2 className="text-4xl font-bold">CONTACT US</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {/* Left Side */}
          <div className="flex flex-col space-y-4 p-6 bg-gray-100 shadow-md rounded-lg">
            <Image
              src="/Contact.jpg"
              alt="Contact"
              width={200}
              height={100}
              className="w-full h-44 mb-4 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold text-gray-700">
              Phone: <span className="text-gray-900">+8801800000000</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-700">
              E-mail: <span className="text-gray-900">mujahid@gmail.com</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-700">
              Location:{" "}
              <span className="text-gray-900">
                Noakhali, Chittagong, Bangladesh
              </span>
            </h2>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 flex flex-col p-6 bg-gray-100 shadow-md rounded-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  E-MAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter Your Message"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F0B100] text-white p-3 rounded-lg hover:bg-amber-300 transition duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
