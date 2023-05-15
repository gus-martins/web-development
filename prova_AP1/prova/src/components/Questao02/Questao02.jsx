import { useState } from "react";

const Questao02 = () => {
    const [turn, setTurn] = useState(true); // Variável de estado para controlar a imagem

    return (
        <div>
            <h1>Questão 02</h1>
            <img src={turn ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/384.png"} alt="Rayquaza" />
            {/* Condicional ternário para controlar o estado da imagem, é equivalente a:  */}
            {/* if (turn) {
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" alt="Rayquaza" />
            } else {
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/384.png" alt="Rayquaza" />
            }  */}
            <button onClick={() => setTurn(!turn)}>Virar</button> {/* Botão para virar a imagem, alterando a variavel set */}
        </div>
    );
}

export default Questao02;