'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaHome, FaUsers } from 'react-icons/fa'
import { FaRegFaceFrown } from 'react-icons/fa6'


function Page() {
  return (
    <div className='container mx-auto px-4'>
      <div className='my-5 flex gap-4'>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 "
        >
          Home
        </Link>/ <p className='text-amber-500'>About</p>
      </div>
      {/* Banner and description section  */}
      <div>
        <Image
          src="/about1.webp"
          alt="A green plant"
          width={1200}
          height={200}
          className="w-full h-auto  object-cover"
        />
        <div className=' max-w-4xl mx-auto text-center my-5 space-y-2'>
          <h2 className='text-2xl font-semibold text-gray-700'>Welcome to GlamGizmo!</h2>
          <p className='text-gray-600'>Welcome to GlamGizmo — your go-to destination for the latest fashion trends. Explore our collection of stylish, high-quality clothing designed to elevate your wardrobe. Enjoy a seamless shopping experience with unbeatable prices and exceptional customer service!</p>
        </div>
      </div>

      {/* Why chose us section */}
      <section className=' mt-20 '>
        <h2 className='text-2xl font-semibold text-center'>Why Chose Us?</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl '>
            <div className='flex justify-center items-center'>
              <FaRegFaceFrown size={50} className='text-[#F0B100]' />
            </div>
            <h2 className=' font-semibold'>Creative design</h2>
            <p className='text-gray-700'>Experience innovative and stylish designs that reflect your unique taste. Our creative designs bring your vision to life! </p>
          </div>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl '>
            <div className='flex justify-center items-center'>
              <FaHome size={50} className='text-[#F0B100]' />
            </div>
            <h2 className=' font-semibold'>100% Money Back Guarantee</h2>
            <p className='text-gray-700'>We guarantee 100% satisfaction or your money back—no questions asked. Shop with confidence knowing your purchase is completely risk-free.</p>
          </div>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl '>
            <div className='flex justify-center items-center'>
              <FaUsers size={50} className='text-[#F0B100]' />
            </div>
            <h2 className=' font-semibold'>Online Support 24/7</h2>
            <p className='text-gray-700'>Get reliable support anytime with our 24/7 online service. We’re here to help you—day or night, always ready. </p>
          </div>

        </div>
      </section>

      {/* what we do section */}
      <section className="mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center ">
            <Image
              src="/whatcanwedo.jpg"
              alt="What Can We Do?"
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <div className='px-2'>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">What Can We Do?</h2>
              <p className="text-gray-600">
                We provide top-notch solutions tailored to your needs—whether it’s product support, custom services, or expert advice. Our goal is to make your experience smooth, efficient, and satisfying every time...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center ">
            <Image
              src="/ourmission.jpg"
              alt="Our Mission"
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to deliver exceptional value through innovative products, outstanding service, and customer-first commitment. We strive to inspire trust, empower communities, and make a positive impact every day...
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center ">
            <Image
              src="/history.jpg"
              alt="History Of Us"
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">History Of Us</h2>
            <p className="text-gray-600">
              From humble beginnings to a trusted name, our journey has been driven by passion, innovation, and dedication. We've grown through challenges, embraced change, and stayed committed to our core values...
            </p>
          </div>
        </div>
      </section>

      {/* Our Customer says section */}
      <section className="container mx-auto my-10">
        <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>



    </div>
  )
}

export default Page
