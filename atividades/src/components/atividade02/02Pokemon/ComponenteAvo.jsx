import MyPokemon from "./MeuContexto"
import ComponentePai from "./ComponentePai"

const ComponenteAvo = () => {

    let number = 43

    return (

        <MyPokemon.Provider value={number}>
            <div>
                <h1>Componente Avô</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`} />
                <ComponentePai />
            </div>
        </MyPokemon.Provider>

    )

}

export default ComponenteAvo