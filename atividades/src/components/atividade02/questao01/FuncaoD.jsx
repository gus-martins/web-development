import MyColor from "./MeuContexto"
import { useContext } from "react"


const FuncaoD = () => {
    const cores = useContext(MyColor)
    return (
        <h1 style={{ backgroundColor: cores.bkgD }}>Funcao D</h1>
    )
}

export default FuncaoD