import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import BotaoDencrementar from "./BotaoDecrementar"
import BotaoDencrementarValor from "./BotaoDecrementarValor"
import BotaoIncrementar from "./BotaoIncrementar"
import BotaoIncrementarValor from "./BotaoIncrementarValor"
import Imagem from "./imagem"



const TelaPrincipal = () => {

    const id = useSelector((state) => state.id.value)
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect(
        () => {
            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    (reponse) => {
                        setNome(reponse.data.name)
                        setImagem(reponse.data.sprites.front_default)
                        setLoading(false)
                    }
                )
                .catch(error => { console.log(error); setLoading(false) })
        }
        , [id]
    )

    const renderizarImagem = () => {
        if (loading) return (
            <h3>Carregando...</h3>
        )
        return (
            <Imagem nome={nome} imagem={imagem} />
        )
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <table className="bordas">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            {renderizarImagem()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar />
                            <BotaoIncrementarValor />
                        </td>
                        <td>
                            <BotaoDencrementar />
                            <BotaoDencrementarValor />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TelaPrincipal