// import logo from './logo.svg';
import './App.css';
// import MeusDados from './components/atividade00/01MeusDados';
// import MyProps from './components/atividade00/02MeusDados';
// import Temperatura from './components/atividade00/03Temperatura';
// import { Header, Body, Footer } from "./components/atividade00/04Multiplo";
// import * as Site from "./components/atividade00/04Multiplo";
import * as Loja from "./components/atividade00/05Children";


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
        <Loja.Legume nome="Beterraba" />
      </Loja.Supermercado>

    </div>
  );
}



export default App;
