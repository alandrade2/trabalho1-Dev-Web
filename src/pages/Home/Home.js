import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

import Prod1 from '../../img/boneca.jpg'
import Prod2 from '../../img/vestido.png'
import Prod3 from '../../img/carrinhos.jpg'
import Prod4 from '../../img/cubomagico.jpg'
import Prod5 from '../../img/ioio.jpg'
import Prod6 from '../../img/peao.jpg'


import Header from '../../components/Header/Header.js'
import Aside from '../../components/Aside/Aside.js'
import Footer from '../../components/Footer/Footer.js'



function Home() {
  return (
    
    <div>
      <Header />
      <div id="content">
        <main>
        <section className="content-main">
            <article>
            <Link to="/News" className="section-home">
                <p>Carrinhos Miniatura (coleção)</p>
                <img src={Prod3}   alt="" />
                <p> R$ 350,00</p>          
             </Link>
            </article>
            <article>
            <a href="#" className="section-home">
                <p>Vestido tamnho M Floral</p>
                <img src={Prod2}   alt="" />
                <p> R$ 600,00</p>          
            </a>
            </article>
            <article>
            <a href="#" className="section-home">
                <p> Boneca Fofura da mamae</p>
                <img src={Prod1}   alt="" />
                <p> R$ 300,00</p>          
            </a>
            </article>
            <article>
            <a href="#" className="section-home">
                <p>Cubo mágico</p>
                <img src={Prod4}   alt="" />
                <p> R$ 95,00</p>          
            </a>
            </article>
            <article>
            <a href="#" className="section-home">
                <p>IoIo Retrô (Coleção)</p>
                <img src={Prod5}   alt="" />
                <p> R$ 150,00</p>          
            </a>
            </article>
            <article>
            <a href="#" className="section-home">
                <p>Peão Retrô</p>
                <img src={Prod6}   alt="" />
                <p> R$ 50,00</p>          
            </a>
            </article>                        

        </section>
    </main>  
        <aside>
          <Aside />
        </aside>
      </div>    
        <Footer />
    </div>

    ) 

}

export default Home;
