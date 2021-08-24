import React from 'react';

import './aside.css';
import ProdBola from '../../img/bola.jpg'
import ProdCamisa from '../../img/camiseta.jpg'

function Aside() {
  return (
   <div className="aside">
      <h2>Ofertas do dia</h2>
        <article>
        <a href="#" className="teste">
            <img src={ProdBola}   alt="" />
            <p> Bola snick futebol infantil</p>
            <p> R$ 100,00</p>          
        </a>
        </article>
        <article>
        <a href="#" className="teste">
            <img src={ProdCamisa}  alt="" />
            <p> Camiseta Basica</p>
            <p> R$ 200,00</p>  
            </a>
        </article>
   </div>    
);
}

export default Aside;