import React from 'react';
import { Link } from 'react-router-dom';
import './news.css';
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Aside from '../../components/Aside/Aside.js'

import Prod3 from '../../img/carrinhos.jpg'

function News() {

    return (
        <div>
          <header>
            <Header />
          </header>
          <div id="content">
        <main>
        <h2>NOVIDADES</h2>
        <section className="content-News">
            <article>
            <Link to="/produtos" className="section-news">
            <p>Carrinhos Miniatura (coleção)</p>
                <img src={Prod3}   alt="" />
                <p>Carros colecionáveis</p>
                <p> R$ 300,00</p>   
             </Link>
            </article>
        </section>
        </main>  
        <aside>
          <Aside />
        </aside>
      </div>    
        <Footer />
      </div>
    );
}


export default News;
