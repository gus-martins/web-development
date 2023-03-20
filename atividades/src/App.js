import logo from './logo.svg';
import './App.css';
// import MeusDados from './components/atividade00/01MeusDados';
import MyProps from './components/atividade00/02MeusDados';
import Temperatura from './components/atividade00/03Temperatura';


function App() {
  return (
    <div className="App">
      {/* <MeusDados /> */}
      {/* <MyProps
        nome="Francisco Gustavo Martins de Sousa"
        curso="Ciência da Computação"
        universidade="Universidade Federal do Ceará" /> */}
      <Temperatura />
    </div>
  );
}



export default App;
