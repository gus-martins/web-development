import { useEffect, useState } from "react";
import axios from "axios";

const PokemonAxios = () => {

    const [id, setId] = useState(100)
    const [nome, setNome] = useState("Rayquaza")
    const [imagem1, setImagem1] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png")
    const [imagem2, setImagem2] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/384.png")

    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .them(
                    (response) => {
                        console.log(response.data)
                        setNome(response.data.nome)
                        setImagem1(response.data.sprites.front_default)
                        setImagem2(response.data.sprites.back_default)
                    }
                )

                .catch(
                    (error) => console.log
                )
        }
    )

    return (
        <div>
            <table >
                <body>
                    <tr>
                        <td>
                            nome: {nome}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={imagem1}
                                style={{ width: 250 }} />
                        </td>
                        <td>
                            <img src={imagem2}
                                style={{ width: 250 }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => { setId = (prev) => prev + 1 }}>
                                Id + 1
                            </button>
                        </td>
                        <td>
                            <button onClick={() => { setId = (prev) => (prev - 1) < 1 ? 1 : prev - 1 }}>
                                Id - 1
                            </button>
                        </td>
                    </tr>
                </body>
            </table>
        </div>
    )
}

export default PokemonAxios