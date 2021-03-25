import React, { Component, component } from "react";

import "../src/css/style.css";
import Barra from "../src/img/barra.png";
import BeatsHeadphones from "../src/img/beats-headphones.png";
import Calendario from "../src/img/calendario.png";
import Chevron from "../src/img/chevrons-right.png";
import Configuracoes from "../src/img/configuracoes.png";
import Conversar from "../src/img/conversar.png";
import Direita from "../src/img/Right.png";
import Divider from "../src/img/Divider.png";
import Email from "../src/img/email.png";
import Esquerda from "../src/img/Left.png";
import Estrela from "../src/img/estrela.png";
import Grid from "../src/img/Grid View.png";
import Home from "../src/img/home.png";
import Heart from "../src/img/heart.png";
import List from "../src/img/ListView.png";
import Logo from "../src/img/logo.png";
import Lupa from "../src/img/lupa.png";
import ShoppingBag from "../src/img/shopping-bag.png";
import Sino from "../src/img/sino.png";
import Todo from "../src/img/todo.png";
import Usuario from "../src/img/usuario.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Código desenvolvido para React */}
        <div>
          <div className="corpo-pagina flex">
            {/* menu esquerdo */}
            <div className="menu-esquerdo" />
            <img className="logo" src={Logo} alt="Logo Ignição Digital" />
            <div className="div-area">
              <img src={Home} alt="home" />
              <select className="area-cliente" name="area" id="area">
                <option value="cliente">Área do Cliente</option>
              </select>
            </div>
            <div className="container-apps-img">
              <p className="apps">APPS</p>
              <img className="email" src={Email} alt="email" />
              <img className="conversar" src={Conversar} alt="conversar" />
              <img className="todo" src={Todo} alt="todo" />
              <img className="calendario" src={Calendario} alt="calendario" />
            </div>
            <div className="container-apps-texto">
              <ul>
                <a href="#">
                  <li>Email</li>
                </a>
                <a href="#">
                  <li>Conversar</li>
                </a>
                <a href="#">
                  <li>Todo</li>
                </a>
                <a href="#">
                  <li>Calendário</li>
                </a>
              </ul>
            </div>
          </div>

          {/* menu direito */}
          <div className="menu-direito">
            {/* menu superior */}
            <nav className="flex nav">
              <div className="flex">
                <img className="img-todo" src={Todo} alt="todo" />
                <img
                  className="img-conversar"
                  src={Conversar}
                  alt="conversar"
                />
                <img className="img-email" src={Email} alt="email" />
                <img
                  className="img-calendario"
                  src={Calendario}
                  alt="calendario"
                />
                <img className="img-estrela" src={Estrela} alt="estrela" />
              </div>
              <div className="nav-end">
                <img className="img-todo" src={Sino} alt="sino" />
                <img className="img-todo" src={Lupa} alt="lupa" />
                <div className="nome-usuario">
                  <h4>Maria Elza</h4>
                  <h5>Cliente VIP</h5>
                </div>
                <img src={Usuario} alt="usuario" />
              </div>
            </nav>
            {/* resultados|home|chevron|cursos */}
            <div className="resultados">
              <h1>Resultados</h1>
              <img className="barra" src={Barra} alt="barra" />
              <img className="home" src={Home} alt="barra" />
              <img className="chevron" src={Chevron} alt="barra" />
              <p className="cursos">Cursos</p>
              <img className="config" src={Configuracoes} alt="configuracoes" />
            </div>
            {/* filtros */}
            <span className="filtros-titulo">Filtros</span>
            <div className="container-filtros">
              {/* preços */}
              <div className="preços">
                <p className="preços-titulo">Preços</p>
                <div className="flex-input">
                  <input type="checkbox" name="R$10" id="dez-reais" />
                  <label for="dez-reais">R$10</label>
                </div>
                <div className="flex-input">
                  <input type="checkbox" name="dezacem" id="dezacem" />
                  <label for="dezacem">R$10-R$100</label>
                </div>
                <div className="flex-input">
                  <input type="checkbox" name="cemaquinhentos" id="cem-quin" />
                  <label for="cem-quin">R$100-R$500</label>
                </div>
                <div className="flex-input">
                  <input type="checkbox" name="quinhentos" id="quinhentos" />
                  <label for="quinhentos">R$ 500</label>
                </div>
                <div className="flex-input">
                  <input type="checkbox" name="todos" id="todos" />
                  <label for="todos">Todos</label>
                </div>
              </div>
              {/* Valores */}
              <div className="valores">
                <div className="flex">
                  <p className="valores-titulo espaço">Valores</p>
                  <p className="valores-titulo">1.99 - 4098</p>
                </div>
                <input type="range" min="1.99" max="4098" />
              </div>
              {/* categorias */}
              <div className="categorias">
                <h3 className="categorias-titulo">Categorias</h3>
                <div className="checkbox">
                  <input type="checkbox" name="erico" id="erico" />
                  <label for="erico">Érico Rocha</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="desafio" id="desafio" />
                  <label for="desafio">Desafio 6 em 7</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="formula" id="formula" />
                  <label for="formula">Fórmula de Lançamento</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="klick" id="klick" />
                  <label for="klick">KlickPages</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="audios" id="audios" />
                  <label for="audios">Audios</label>
                </div>
              </div>
              {/* Numeros em cada categoria em UL */}
              <ul class="numeros">
                <li>1920</li>
                <li>1820</li>
                <li>462</li>
                <li>6556</li>
                <li>120</li>
              </ul>
              {/* avaliacao */}
              <div className="avaliacao">
                <h3 className="avaliacao-titulo">Avaliação</h3>
                <div className="estrelas">
                  <input type="radio" id="cm_star-empty" name="fb" value="" />
                  <label for="cm_star-1">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1" name="fb" value="1" />
                  <label for="cm_star-2">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2" name="fb" value="2" />
                  <label for="cm_star-3">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3" name="fb" value="3" />
                  <label for="cm_star-4">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4" name="fb" value="4" />
                  <label for="cm_star-5">
                    <i className="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-5"
                    name="fb"
                    value="5"
                    defaultChecked
                  />
                </div>
                <div className="estrelas2">
                  <input
                    type="radio"
                    id="cm_star-empty2"
                    name="fb-2"
                    value=""
                    defaultChecked
                  />
                  <label for="cm_star-1.2">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1.2" name="fb-2" value="1" />
                  <label for="cm_star-2.2">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2.2" name="fb-2" value="2" />
                  <label for="cm_star-3.2">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3.2" name="fb-2" value="3" />
                  <label for="cm_star-4.2">
                    <i className="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-4.2"
                    name="fb-2"
                    value="4"
                    defaultChecked
                  />
                  <label for="cm_star-5.2">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5.2" name="fb-2" value="5" />
                </div>
                <div className="estrelas3">
                  <input
                    type="radio"
                    id="cm_star-empty3"
                    name="fb-3"
                    value=""
                    defaultChecked
                  />
                  <label for="cm_star-1.3">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1.3" name="fb-3" value="1" />
                  <label for="cm_star-2.3">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2.3" name="fb-3" value="2" />
                  <label for="cm_star-3.3">
                    <i className="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-3.3"
                    name="fb-3"
                    value="3"
                    defaultChecked
                  />
                  <label for="cm_star-4.3">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4.3" name="fb-3" value="4" />
                  <label for="cm_star-5.3">
                    <i className="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5.3" name="fb-3" value="5" />
                </div>
              </div>
              {/* numero de estrelas dividio em UL */}
              <ul>
                <li class="numeros2">8500</li>
                <li class="numeros2">3250</li>
                <li class="numeros2">1120</li>
              </ul>
              <div>
                <button className="limpar-filtro">
                  <p className="limpar">LIMPAR FILTROS</p>
                </button>
              </div>
            </div>
            {/* Pesquisa */}
            <div>
              <div className="found">
                <p className="found-titulo">200 Resultados encontrados</p>
                <div className="rigth">
                  <select className="listagem" name="listagem" id="listagem">
                    <option value="cliente">Listagem</option>
                  </select>
                  <img src={Grid} alt="Grid" />
                  <img src={List} alt="list" />
                </div>
              </div>
              {/* barra busca */}
              <div className="pesquisa">
                <img src={Lupa} alt="Pesquisa" />
                <input className="buscar" type="text" placeholder="Buscar" />
              </div>
            </div>
            {/*containers imagens*/}
            <div className="conjunto-imagem">
              <div className="container">
                <img
                  className="imagem-container"
                  src={BeatsHeadphones}
                  alt="imagem-1"
                />
                <div className="flex-column">
                  <h3 className="titulo">FÓRMULA DE LANÇAMENTO</h3>
                  <p className="subtitulo">
                    Por <span>Érico Rocha</span>
                  </p>
                  <p className="texto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <img className="divisor" src={Divider} alt="divisor" />
                  <div className="nota">
                    <p>3.4</p>
                    <img src={Estrela} alt="estrela" />
                  </div>
                  <span className="valor">$2500</span>
                  <div className="amei">
                    <img src={Heart} alt="coracao" />
                    <span>AMEI</span>
                  </div>
                  <div className="comprar">
                    <img src={ShoppingBag} />
                    <span>COMPRAR</span>
                  </div>
                </div>
              </div>
              <div className="container">
                <img
                  className="imagem-container"
                  src={BeatsHeadphones}
                  alt="imagem-1"
                />
                <div className="flex-column">
                  <h3 className="titulo">FÓRMULA DE LANÇAMENTO</h3>
                  <p className="subtitulo">
                    Por <span>Érico Rocha</span>
                  </p>
                  <p className="texto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <img className="divisor" src={Divider} alt="divisor" />
                  <div className="nota">
                    <p>3.4</p>
                    <img src={Estrela} alt="estrela" />
                  </div>
                  <span className="valor">$2500</span>
                  <div className="amei">
                    <img src={Heart} alt="coracao" />
                    <span>AMEI</span>
                  </div>
                  <div className="comprar">
                    <img src={ShoppingBag} />
                    <span>COMPRAR</span>
                  </div>
                </div>
              </div>
              <div className="container">
                <img
                  className="imagem-container"
                  src={BeatsHeadphones}
                  alt="imagem-1"
                />
                <div className="flex-column">
                  <h3 className="titulo">FÓRMULA DE LANÇAMENTO</h3>
                  <p className="subtitulo">
                    Por <span>Érico Rocha</span>
                  </p>
                  <p className="texto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <img className="divisor" src={Divider} alt="divisor" />
                  <div className="nota">
                    <p>3.4</p>
                    <img src={Estrela} alt="estrela" />
                  </div>
                  <span className="valor">$2500</span>
                  <div className="amei">
                    <img src={Heart} alt="coracao" />
                    <span>AMEI</span>
                  </div>
                  <div className="comprar">
                    <img src={ShoppingBag} />
                    <span>COMPRAR</span>
                  </div>
                </div>
              </div>
              <div className="container">
                <img
                  className="imagem-container"
                  src={BeatsHeadphones}
                  alt="imagem-1"
                />
                <div className="flex-column">
                  <h3 className="titulo">FÓRMULA DE LANÇAMENTO</h3>
                  <p className="subtitulo">
                    Por <span>Érico Rocha</span>
                  </p>
                  <p className="texto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <img className="divisor" src={Divider} alt="divisor" />
                  <div className="nota">
                    <p>3.4</p>
                    <img src={Estrela} alt="estrela" />
                  </div>
                  <span className="valor">$2500</span>
                  <div className="amei">
                    <img src={Heart} alt="coracao" />
                    <span>AMEI</span>
                  </div>
                  <div className="comprar">
                    <img src={ShoppingBag} />
                    <span>COMPRAR</span>
                  </div>
                </div>
              </div>
              <div className="container">
                <img
                  className="imagem-container"
                  src={BeatsHeadphones}
                  alt="imagem-1"
                />
                <div className="flex-column">
                  <h3 className="titulo">FÓRMULA DE LANÇAMENTO</h3>
                  <p className="subtitulo">
                    Por <span>Érico Rocha</span>
                  </p>
                  <p className="texto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <img className="divisor" src={Divider} alt="divisor" />
                  <div className="nota">
                    <p>3.4</p>
                    <img src={Estrela} alt="estrela" />
                  </div>
                  <span className="valor">$2500</span>
                  <div className="amei">
                    <img src={Heart} alt="coracao" />
                    <span>AMEI</span>
                  </div>
                  <div className="comprar">
                    <img src={ShoppingBag} />
                    <span>COMPRAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="paginas">
            <ul className="paginacao">
              <li className="page-item">
                <a href="#">
                  <img src={Esquerda} alt="esquerda" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  7
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  8
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  9
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  10
                </a>
              </li>
              <li className="page-item">
                <a href="#">
                  <img src={Direita} alt="direita" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
