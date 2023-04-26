import { useContext } from "react"
import MyColor from "./MeuContexto"

const FuncaoB = () => {

    const cores = useContext(MyColor)

    return (

        //versão 3
        <h1 style={{ backgroundColor: cores.bkgB }}>Funcao B</h1>

        //Versão 01
        // <MyColor.Consumer>
        //     {
        //         ({ cores }) => {
        //             return (
        //                 <h1 style={{ backgroundColor: cores.bkgB }}>Funcao B</h1>
        //             )
        //         }
        //     }
        // </MyColor.Consumer>

        //versão 2
        // <h1 style={{ backgroundColor: useContext(MyColor) }}>Função B</h1>


    )
}

export default FuncaoB