import { useEffect, useState } from "react";

const Questao03 = () => {
    const [maiorPop, setMaiorPop] = useState(""); // Variável de estado para controlar a maior população
    const [menorPop, setMenorPop] = useState(""); // Variável de estado para controlar a menor população

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then(
                (response) => { // Retorna uma Promise
                    return response.json() // Retorna um objeto JSON caso a Promise seja resolvida
                }
            )
            .then(
                (data) => {
                    let maior = 0;
                    let menor = data[0].population;
                    let indexMaior = 0;
                    let indexMenor = 0;
                    for (let i = 0; i < data.length; i++) { // Percorre o vetor data
                        if (data[i].population > maior) { // Verifica se a população do país atual é maior que a maior população
                            maior = data[i].population; // Armazena a maior população
                            indexMaior = i; // Armazena o índice do país com maior população
                        }
                        if (data[i].population < menor) { // Verifica se a população do país atual é menor que a menor população
                            menor = data[i].population; // Armazena a menor população
                            indexMenor = i; // Armazena o índice do país com menor população
                        }
                    }
                    setMaiorPop(data[indexMaior].capital[0]); // Altera o estado da variável maiorPop
                    setMenorPop(data[indexMenor].capital[0]); // Altera o estado da variável menorPop
                }
            )
            .catch(error => console.log(error)) // Retorna um erro caso a Promise seja rejeitada
    }, []);

    return (
        <div>
            <h1>Questão 03</h1>
            <p>Capital com maior população: {maiorPop}</p>
            <p>Capital com menor população: {menorPop}</p>
        </div>
    );

}

export default Questao03;


