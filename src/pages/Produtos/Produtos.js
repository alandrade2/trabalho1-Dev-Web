import React from 'react';
import { Link } from 'react-router-dom';
import './produtos.css';
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Aside from '../../components/Aside/Aside.js'

import Prod3 from '../../img/carrinhos.jpg'

function Produtos() {

    return (
        <div>
          <header>
            <Header />
          </header>
          <div id="content">
        <main>
        <h2>Produtos</h2>
        <section className="content-Product">
            <div className="section-fotos">
            <Link to="#" className="section-foto">
                <img src={Prod3}   alt="" />
             </Link>
             <Link to="#" className="section-foto">
                <img src={Prod3}   alt="" />
             </Link>
             <Link to="#" className="section-foto">
                <img src={Prod3}   alt="" />
             </Link>             

            </div>
        <div className="prod_detalhe">
                <p>Carrinhos Miniatura (coleção)</p>
            <article>
            <Link to="#" className="section-Product">
                <img src={Prod3}   alt="" />
             </Link>
            </article>
        </div>
        <div className="lista_detalhes">
          <h3>Descrição</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus maxime at sapiente suscipit laboriosam? Doloribus veniam, harum, perspiciatis soluta ab aliquam nemo cum hic minus eaque laboriosam, officia sequi?</p>
          <h3>Preço</h3>
          <p>R$ 300,00</p>
        <div className="preco-total">
            <div className="input_cep">
              <p>Pesquisar CEP</p>
              <input type="text" name="cep1" id="cep1" value="14.400" />
              <span>-</span>
              <input type="text" name="cep2" id="cep2" value="000" />
            </div>
          <div className="frete">
            <span>Valor Frete</span>
            <input type="text" value="R$ 0,00"/>
          </div>
          <div className="total">
            <span>Total</span>
            <input type="text" value="R$ 300,00" />
          </div>

        </div>


        </div>
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


export default Produtos;
