import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ecomImg from '../../img/ecommerce.png'


function Login() {
  return (
<div className="global-container">

<div className="login-container">
          <h1>LOGIN</h1>
        <img src={ecomImg} alt="" />
      <section className="form-login">

       <form action="">
       <span>e-mail</span> 
     <input type="email" name="form_email" id="email" placeholder="exemplo@exemplo.com.br" required />
     <span>Senha</span> 
     <input type="password" name="form_senha" id="password" placeholder="Digite sua senha" required />
        <div className="logado">
          <input type="checkbox" name="form_che" id="check" />
          <span>manter Logado</span>
        </div>
        <button className="button" href="/" type="submit">Entrar</button> 
         
       </form>
     <Link to="/" className="backHome">
       <FiLogOut size={16} color="black" />
      <span>Voltar para home</span>
     </Link> 
      <div className="rodape">
        <span>Não tenho conta</span>
        <Link to="/Register" className="button-rodape">
            Cadastre-se
         </Link> 
      </div>
      </section>
    </div>
</div>
    ); 

}

export default Login;
