import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiMapPin, FiLogIn, FiUserPlus } from 'react-icons/fi';
import './header.css';
import ecomImg from '../../img/ecommerce.png'

function Header() {
  return (
   <div>
     <header class="header">
        <nav className="menu1">
              <div class="img-logo">
                <Link to="/">
                  <img src={ecomImg} alt="" />
                </Link>
              </div>                

              <div className="cep">
                 <FiMapPin size={20} color="black" /> 
                  <h3>Enviar para</h3>
                  <Link to="/Produtos"><h4>(Buscar CEP)</h4></Link>
              </div>
              

              <div className="search">
                <FiSearch size={40} color="black" />
                <input type="search" name="product" id="searchProduct" placeholder="Pesquisar produto" />
              </div>
              <div id="login">
              <FiLogIn size={20} color="Red" />
              <Link to="/Login"><h2>Log in</h2></Link>
                
              </div>
              <div id="register">
              <FiUserPlus size={20} color="black" />
              <Link to="#"><h2>Cadastro</h2></Link>
                
              </div>
              <div id="carshop">
                <FiShoppingCart size={60} color="black"/>
                <h4>carrinho</h4>
              </div>
        </nav>

 

    <nav className="Menu-horizontal">
      <Link to="/"> Home </Link>
      <Link to="#"> Setores </Link>
      <Link to="/News"> Novidades </Link>
      <Link to="#"> Promoções </Link>
      <Link to="#"> Quem Somos </Link>
    </nav>


      </header>

    </div>    
);
}

export default Header;