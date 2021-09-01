import React from 'react';
import { Link } from 'react-router-dom';

import './endereco.css';


import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'



function Endereco() {
  return (
    
    <div>
        <header>
          <Header />
        </header>

      <div id="content-main">
        <h2>Endereços Cadastrados</h2>
        <main className="main-Endereco">
            <div className="listEnd">
              <div className="listaend">
                <span className= "SpanEnd" >TRABALHO</span>
                <span className= "SpanEnd" >Rua Fulano de Tal, n° 20</span>
                <span className= "SpanEnd" >Cep - 14.400-000</span>
              </div>  
              <div className="listaend">
                <span className= "SpanEnd" >CASA</span>
                <span className= "SpanEnd" >Rua Major Claudiano, n° 2222</span>
                <span className= "SpanEnd" >Cep - 14.400-000</span>
              </div>  
              <div className="listaend">
                <span className= "SpanEnd" >AMIGO 01</span>
                <span className= "SpanEnd" >Rua General Ozorio, n° 111</span>
                <span className= "SpanEnd" >Cep - 14.400-000</span>
              </div>                
              <div className="selectionEnd">
                <span className= "SpanEnd" >NAMORADA</span>
                <span className= "SpanEnd" >Rua Major Nicacio, n° 202020</span>
                <span className= "SpanEnd" >Cep - 14.400-000</span>
              </div>                              
            </div>

            <form action="" className="Form-endereco">
                <div className="endApelido">
                    <span className= "SpanEnd">Apelido</span>
                    <input type="text" className="input-End" Value="NAMORADA" />
                </div>

                <div className="cidade1">
                        <span className= "SpanCity">Cep</span>
                        <input type="text" id="input-cep" Value="14.400-000" />
                        <span className= "SpanCity">Cidade</span>
                        <input type="text" id="input-city" value="Franca"/>
                        <span className= "SpanCity">UF</span>
                        <input type="text" id="input-uf" value="SP" />
                </div>
                <div className="cidade1">
                        <span className= "SpanCity">Logradouro</span>
                        <input type="text" id="input-rua" Value="Rua Major Nicacio" />
                        <span className= "SpanCity">N°</span>
                        <input type="text" id="input-num" value="202020"/>
                </div>
                <div className="cidade1">
                        <span className= "SpanCity">Bairro</span>
                        <input type="text" id="input-bairro"  />
                        <span className= "SpanCity">Compl</span>
                        <input type="text" id="input-compl"/>
                </div>
                <div className="LogEnd">
                   <div className= "direcCheck">
                        <input type="checkbox" className="endCheck" checked />
                        <span>ATIVO</span>
                    </div> 
                    <div className= "direcCheck">
                        <input type="checkbox" className="endCheck"/>
                        <span>Endereço Principal</span>
                    </div>  
                </div>     
                <div className="buttons-end">
                    <Link to="/" className="btn-link">
                        <button id="btn-salvar" className="btn-endereco">Salvar</button>
                    </Link>

                    <Link to="/" className="btn-link">
                        <button id="btn-excluir" className="btn-endereco">Excluir</button>
                    </Link>
                </div>

            </form>

        </main>  

      </div>    
        <Footer />
    </div>

    ) 

}

export default Endereco;