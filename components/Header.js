"use client";

import React, { useState, useEffect } from "react";

import "../styles/header.css";

import { categories } from "../data";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [id, setId] = useState("home");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY > sectionTop - 150) {
        setId(section.getAttribute("id"));
      }
    });

    // console.log({ scrolled });
    if (scrolled > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    toggleVisible();

    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <header
      style={{
        background: visible || showMenu ? "var(--bg-main)" : "transparent",
        boxShadow: visible ? "2px 10px 20px var(--shadow-color)" : "none",
      }}
    >
      <nav>
        <a href="#" className="logo">
          <i className="fa-solid fa-person-hiking"></i> Travel
        </a>

        <div
          className="menu_btn"
          onClick={() => setShowMenu((value) => !value)}
        >
          {showMenu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>

        <ul
          style={{
            height: showMenu ? 250 : 0,
          }}
        >
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href={category.link}
                className={id === category.name ? "active" : ""}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
