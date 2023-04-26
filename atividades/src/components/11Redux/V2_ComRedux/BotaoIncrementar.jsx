import { useDispatch } from "react-redux"
import { incrementar } from "./slice/idSlice"

const BotaoIncrementar = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(incrementar())} >
                Incrementar
            </button>
        </div>
    )
}

export default BotaoIncrementar