import { useContext } from "react";
import MyPokemon from "./MeuContexto";

const ComponenteFilho = () => {

    let number = useContext(MyPokemon)

    return (
        <div>
            <h1>Componente Filho</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number + 2}.png`} />
        </div>
    )
}

export default ComponenteFilho