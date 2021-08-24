import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import './login.css';
import ecomImg from '../../img/ecommerce.png'


function Login() {
  return (
    
    <div className="container">

      <h1>LOGIN</h1>
      <div class="img-logo">
        <Link to="/">
          <img src={ecomImg} alt="" />
        </Link>
      </div>                
        <form action="#" className="form_login">
           <span>e-mail</span> 
           <input type="email" name="form_email" id="email" placeholder="exemplo@exemplo.com.br"/>
           <span>Senha</span> 
           <input type="password" name="form_senha" id="password" placeholder="Digite sua senha"/>
             <input type="checkbox" name="form_che" id="check" />
             <span>manter Logado</span>
           <button type="submit">Entrar</button> 
        </form>
      <div className="return_form">
        <span>Não tenho conta</span>
        <button> Cadastre-se</button>
      </div>

    </div>

  

    ) 

}

export default Login;
