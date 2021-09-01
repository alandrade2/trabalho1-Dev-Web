import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home.js';
import Produtos from './pages/Produtos/Produtos.js';
import Login from './pages/Login/Login.js';
import News from './pages/News/News.js';
import Register from './pages/Register/Register.js';
import Cadastro from './pages/Cadastro/Cadastro.js';
import Endereco from './pages/Endereco/Endereco.js';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Produtos" component={Produtos} />
                <Route path="/Login" component={Login} />
                <Route path="/News" component={News} />
                <Route path="/Register" component={Register} />
                <Route path="/Cadastro" component={Cadastro} />
                <Route path="/Endereco" component={Endereco} />                
            </Switch>
        </BrowserRouter>


    );
}

