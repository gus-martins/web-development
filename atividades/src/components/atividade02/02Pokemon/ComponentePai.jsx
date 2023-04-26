import { useContext } from "react";
import MyPokemon from "./MeuContexto";
import ComponenteFilho from "./ComponenteFilho"

const ComponentePai = () => {

    let number = useContext(MyPokemon)

    return (
        <div>
            <h1>Componente Pai</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number + 1}.png`} />
            <ComponenteFilho />
        </div>
    )
}

export default ComponentePai