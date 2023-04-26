import { useContext } from "react"
import FuncaoD from "./FuncaoD"
import MyColor from "./MeuContexto"

const FuncaoC = () => {

    const cores = useContext(MyColor)

    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgC }}>Funcao C</h1>
            <FuncaoD />
        </div>
    )
}

export default FuncaoC