// import { useContext } from "react"
import MyColor from "./MeuContexto"

const FuncaoB = () => {

    // const cor = useContext(MyColor) V3

    return (

        //versão 3
        // <h1 style={{ backgroundColor: cor }}>Funcao B</h1>

        //Versão 01
        <MyColor.Consumer>
            {
                ({ cor }) => {
                    return (
                        <h1 style={{ backgroundColor: cor }}>Funcao B</h1>
                    )
                }
            }
        </MyColor.Consumer>

        //versão 2
        // <h1 style={{ backgroundColor: useContext(MyColor) }}>Função B</h1>


    )
}

export default FuncaoB