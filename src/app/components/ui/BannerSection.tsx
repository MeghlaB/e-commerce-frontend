"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay } from "swiper/modules";


const images = [
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",

];

export const BannerSection = () => {
  return (

    <div className="w-full aspect-[16/6] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
            style={{
              backgroundImage:
                `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment:"fixed"
            }}
            className="min-h-[70vh] py-12 flex items-center gap-6">
              {/* div-1 */}
              <div className="w-full lg:w-1/2 p-20">
                <h1 className="text-xl lg:text-4xl font-bold text-white mb-2">Shop Everything, Easily with KinbiBD</h1>
                <p className="text-white mb-4">From the latest gadgets and trendy fashion to daily must-haves — KinbiBD brings everything you need, right to your doorstep. Fast delivery. Trusted quality. Hassle-free shopping.</p>
                <button className="btn bg-yellow-500 text-black">Shop Now</button>
              </div>

              {/* div-2 */}
              <div className="w-full lg:w-1/2">

              </div>
              

             

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

    

