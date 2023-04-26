import { useDispatch } from "react-redux"
import { decrementar } from "./slice/idSlice"
import { useSelector } from "react-redux";

const BotaoDencrementar = () => {

    const dispatch = useDispatch()

    const id = useSelector((state) => state.id.value)

    const logicaDecrementar = () => {
        if ((id - 1) < 1) return

        dispatch(decrementar())
    }

    return (
        <div>
            <button onClick={logicaDecrementar} >
                Decrementar
            </button>
        </div>
    )
}

export default BotaoDencrementar