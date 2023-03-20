import logo from './logo.svg';
import './App.css';
import MyProps from './components/MyProps';
// import Calculadora from './components/calculadora';
// import HelloWorld from './components/helloworld';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <Calculadora /> */}
      <MyProps
        nome='gustavo'
        curso="CC" />
    </div>
  );
}


export default App;
