import { useDispatch } from "react-redux"
import { decrementarValor } from "./slice/idSlice"

const BotaoDencrementarValor = () => {

    const dispatch = useDispatch()
    let valor = 10

    return (
        <div>
            <button onClick={() => dispatch(decrementarValor(valor))} >
                Decrementar - {valor}
            </button>
        </div>
    )
}

export default BotaoDencrementarValor 