"use client";
import React from "react";
import Image from "next/image";
import "../styles/banner.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { banners } from "../data";

const Banner = () => {
  return (
    <section id="home" className="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        loop={true}
        navigation={true}
        className="img-container"
      >
        {banners.map((img, id) => (
          <SwiperSlide key={id}>
            <Image src={img} alt="banner" width={1920} height={1280} priority />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="box">
        <strong>
          Explore The World <i className="fa-solid fa-globe"></i>
        </strong>
        <h1>It's a Big World Out There, Go Explore</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          iure
        </p>
        <a href="#">Explore Now</a>
      </div>
    </section>
  );
};

export default Banner;
