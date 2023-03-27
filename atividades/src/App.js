// import logo from './logo.svg';
import './App.css';
// import MeusDados from './components/atividade00/01MeusDados';
// import MyProps from './components/atividade00/02MeusDados';
// import Temperatura from './components/atividade00/03Temperatura';
// import { Header, Body, Footer } from "./components/atividade00/04Multiplo";
// import * as Site from "./components/atividade00/04Multiplo";
import * as Loja from "./components/atividade00/05Children";
// import FunctionA from './components/atividade00/hierarquia/FunctionA';


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
      <Loja.Supermercado nome="Dinal">
        <Loja.Legume nome="Batata" />
        <Loja.Bebida nome="Ypioca" />
      </Loja.Supermercado>
      {/* <FunctionA /> */}
    </div>
  );
}



export default App;
