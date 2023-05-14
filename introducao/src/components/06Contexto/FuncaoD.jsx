import MyColor from "./MeuContexto"
import { useContext } from "react"


const FuncaoD = () => {
    const { cor, nome } = useContext(MyColor)
    return (
        <h1 style={{ backgroundColor: cor }}>Funcao D de {nome}</h1>
    )
}

export default FuncaoD