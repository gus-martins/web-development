import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MyColor from "./MeuContexto"

const FuncaoA = () => {

    const cor = { cor: "red", nome: "Elizadora gay" }

    return (
        <MyColor.Provider value={cor}>
            <div>
                <h1 style={{ backgroundColor: cor.cor }}>Funcao A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MyColor.Provider>
    )
}

export default FuncaoA