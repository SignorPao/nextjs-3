import React from 'react'

import '@/styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <strong>Travel</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat</p>

          <div className="social">
            <a href="#!" aria-label='facebook' title='facebook'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href="#!" aria-label='twitter' title='twitter'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href="#!" aria-label='instagram' title='instagram'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href="#!" aria-label='github' title='github'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>

        <div className="box">
          <strong>Links</strong>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#trending">trending</a>
            </li>
            <li>
              <a href="#destinations">destinations</a>
            </li>
            <li>
              <a href="#testimonials">testimonials</a>
            </li>
            <li>
              <a href="#!">book online</a>
            </li>
          </ul>
        </div>

        <div className="box">
          <strong>Extra Links</strong>
          <ul>
            <li>
              <a href="#search">find destinations</a>
            </li>
            <li>
              <a href="#explore">explore nearby</a>
            </li>
            <li>
              <a href="#subscribe">subscribe</a>
            </li>
            <li>
              <a href="#!">privacy poilcy</a>
            </li>
            <li>
              <a href="#!">terms of use</a>
            </li>
          </ul>
        </div>

        <div className="box">
          <strong>Contact</strong>
          <span>
            <i className='fas fa-map-marker-alt'></i>
            Koh tao island, Thailand
          </span>
          <span>
            <i className='fas fa-envelope'></i>
            example@gmail.com
          </span>
          <span>
            <i className='fas fa-phone-square-alt'></i>
            8-555-555-55-55
          </span>
        </div>
      </div>

      <span className='copyright'>
        2023 signorPao - All copyright reserved
      </span>
    </footer>
  )
}

export default Footer
