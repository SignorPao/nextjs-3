"use client";

import React from "react";
import Image from "next/image";

import "../styles/testimonials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="img-container">
        <Image
          src="https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ts.png?raw=true"
          alt="testimonials"
          width={488}
          height={482}
        />
      </div>

      <div className="slider">
        <h2>Client's reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          laudantium.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="card">
                <div className="text">
                  <i className="fas fa-quote-left"></i>
                  <p>{testimonial.text}</p>
                  <strong>{testimonial.name}</strong>
                </div>

                <div className="avatar">
                  <Image
                    src={testimonial.avatar}
                    alt="testimonial avatar"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
