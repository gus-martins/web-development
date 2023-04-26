import { useState } from "react"
import BotaoDencrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import Imagem from "./imagem"

const TelaPrincipal = () => {

    const [id, setId] = useState(384)

    const incrementar = () => {
        setId((prev) => prev + 1)
    }

    const decrementar = () => {
        setId((prev) => prev - 1)
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem id={id} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar incrementar={incrementar} />
                        </td>
                        <td>
                            <BotaoDencrementar decrementar={decrementar} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal