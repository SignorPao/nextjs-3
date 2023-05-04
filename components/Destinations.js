import React from "react";
import Image from "next/image";

import "../styles/destinations.css";

import { destinations } from "../data";

const Destinations = () => {
  return (
    <section id="destinations">
      <div className="heading">
        <h2>Popular Destinations</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          obcaecati
        </p>
      </div>

      <div className="grid">
        {destinations.map((destination, index) => (
          <div className={`card card-${index}`} key={destination.id}>
            <Image
              src={destination.img}
              alt="destination"
              width={600}
              height={600}
            />
            <div className="box">
              <span className="star">
                <i className="fa-solid fa-star"></i> {destination.stars}
              </span>

              <div className="group">
                <div className="text">
                  <strong>{destination.name}</strong>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {destination.location}
                  </span>
                </div>

                <span className="price">${destination.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
