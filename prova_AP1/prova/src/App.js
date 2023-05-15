import './App.css';
import Questao01X from './components/Questao01/Questao01';
import Questao02 from './components/Questao02/Questao02';
import Questao03 from './components/Questao03/Questao03';

function App() {

  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
    { nome: "João", notas: { ap1: 4.4, ap2: 5.4 } },
    { nome: "Maria", notas: { ap1: 8.4, ap2: 9.4 } },
    { nome: "José", notas: { ap1: 9.4, ap2: 5.4 } },
  ]


  return (
    <div className="App">

      <Questao01X alunos={alunos} />
      <Questao02 />
      <Questao03 />

    </div>
  );
}

export default App;
