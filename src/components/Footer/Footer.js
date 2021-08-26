import React from 'react';

import './footer.css';
import ImgFace from '../../img/facebook.png'
import ImgInsta from '../../img/instagram.png'
import ImgWhat from '../../img/whatsapp.png'


function Footer() {
  return (

  <div className="footer">
        <ul className="ulfooter" >
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Nossa missão</a></li>
            <li><a href="#">Comercial</a></li>
        </ul>
  <nav>
    <ul>
      <li>
        <a href="#">
          <img src={ImgFace}   alt="" />
          <span className="Span-footer">/ecommerce</span>
          </a>
      </li>
      <li>
        <a href="#">
          <img src={ImgInsta}   alt="" />
          <span className="Span-footer">@ecommerce</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={ImgWhat}   alt="" />
          <span className="Span-footer">(16)99999-9999</span>
        </a>
      </li>
    </ul>
    </nav>
   </div>    
  )
}

export default Footer;