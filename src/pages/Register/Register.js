import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import ecomImg from '../../img/ecommerce.png'


function Login() {
  return (
<div className="global-container">

<div className="login-container">
        <img src={ecomImg} alt="" />
          <h1>NOVA CONTA</h1>
      <section className="form-register">

       <form action="">
     <span>Nome</span> 
     <input type="text" name="form_nome" id="nome" placeholder="Digite seu nome" required />
       <span>e-mail</span> 
     <input type="email" name="form_email" id="email" placeholder="exemplo@exemplo.com.br" required />
        <button className="button" href="/" type="submit">Criar Conta</button> 
         
       </form>
      <div className="rodape">
        <span>Já tem conta?</span>
        <Link to="/Login" className="button-rodape">
              Login
         </Link> 
      </div>
      </section>
    </div>
</div>
    ); 

}

export default Login;
