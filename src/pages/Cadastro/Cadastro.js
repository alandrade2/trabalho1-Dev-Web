import React from 'react';
import { Link } from 'react-router-dom';

import './cadastro.css';


import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'



function Cadastro() {
  return (
    
    <div>
        <header>
          <Header />
        </header>

      <div id="content-main">
        <main className="main">
        <h2>DADOS CADASTRAIS</h2>
        <form action="">
        <div id="content-endereco">            
          <div className="endereco-1">
            <div >
                <span className= "clSpan">Nome</span>
                <input type="text" name="" id="nome" className="input-cad" />
            </div>
            <div >
                <span className= "clSpan" >CPF</span>
                <input type="text" name="" id="cpf" className="input-cad" />
            </div>
          </div>
          <div className="endereco-1">
            <div >
                <span className= "clSpan">Data Nascimento</span>
                <input type="date" name="" id="dt_nasc" className="input-cad" />
            </div>
            <div >
                <span className= "clSpan" >e-mail</span>
                <input type="email" name="" id="email" className="input-cad" />
            </div>
          </div>
          <div className="endereco-1">
            <div >
                <span className= "clSpan">Genero</span>
                    <select name="genero" id="genero" className="input-cad">
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outros">Outros</option>
                    </select>
            </div>
            <div >
                <span className= "clSpan" >Senha</span>
                <input type="Password" name="" id="Senha" className="input-cad" />
            </div>
          </div>
          <div className="endereco-1">
            <div >
                <span className= "clSpan">Celular</span>
                <input type="tel" name="" id="celular" className="input-cad" Value="( )" />
            </div>
            <div >
            <span className= "clSpan" >E-mail Alternativo</span>
                <input type="email" name="" id="email-alt" className="input-cad" />
            </div>
          </div>
        </div>
        <Link to="/">
            <button id="btn-cad">Salvar</button>
        </Link>
        </form>

        </main>  

      </div>    
        <Footer />
    </div>

    ) 

}

export default Cadastro;
