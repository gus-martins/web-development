// import logo from './logo.svg';
import './App.css';
// import MeusDados from './components/atividade00/01MeusDados';
// import MyProps from './components/atividade00/02MeusDados';
// import Temperatura from './components/atividade00/03Temperatura';
// import { Header, Body, Footer } from "./components/atividade00/04Multiplo";
// import * as Site from "./components/atividade00/04Multiplo";
// import * as Loja from "./components/atividade00/05Children";
// import FunctionA from './components/atividade00/hierarquia/FunctionA';
// import Pai from "./components/atividade01/questao01/01Pai";
// import * as PC from "./components/atividade01/02MeuPC";
import * as Batalha from './components/atividade01/03Batalha';



function App() {
  return (
    <div className="App">
      {/* <MeusDados /> */}
      {/* <MyProps
        nome="Francisco Gustavo Martins de Sousa"
        curso="Ciência da Computação"
        universidade="Universidade Federal do Ceará" /> */}
      {/* <Temperatura /> */}
      {/* <Site.Header />
      <Site.Body />
      <Site.Footer /> */}
      {/* <Loja.Supermercado nome="Dinal">
        <Loja.Legume nome="Batata" />
        <Loja.Bebida nome="Ypioca" />
      </Loja.Supermercado> */}
      {/* <FunctionA /> */}
      {/* <Pai /> */}

      {/* <h1>Meu PC</h1>
      <PC.PlacaMae nome="Emanuela" preco={236.30} />
      <PC.Memoria nome="Janaina" preco={120.34} />
      <PC.PlacaDeVideo nome="Eliêda" preco={4124.89} /> */}

      <Batalha.World>

        <Batalha.Arena />
      </Batalha.World>

    </div>
  );
}



export default App;
