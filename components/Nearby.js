import React from "react";
import Image from "next/image";

import "../styles/nearby.css";

import { explores } from "../data";

const Nearby = () => {
  return (
    <section id="explore">
      <div className="heading">
        <h2>Explore Nearby</h2>
        <p>5,400 beautiful places to go</p>
      </div>

      <div className="wrapper">
        {explores.map((explore) => (
          <div className="card" key={explore.id}>
            <Image src={explore.img} alt="explore" width={100} height={100} />
            <a href="#!">{explore.name}</a>
            <p>{explore.time}</p>
            <span>{explore.distance}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nearby;
