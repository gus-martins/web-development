import { useDispatch } from "react-redux"
import { incrementarValor } from "./slice/idSlice"

const BotaoIncrementarValor = () => {

    const dispatch = useDispatch()
    let valor = 10

    return (
        <div>
            <button onClick={() => dispatch(incrementarValor(valor))} >
                Incrementar + {valor}
            </button>
        </div>
    )
}

export default BotaoIncrementarValor