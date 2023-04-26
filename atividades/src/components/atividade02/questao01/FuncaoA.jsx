import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MyColor from "./MeuContexto"

const FuncaoA = () => {

    const cores = { bkgA: "green", bkgB: "red", bkgC: "yellow", bkgD: "blue" }

    return (
        <MyColor.Provider value={cores}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA }}>Funcao A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MyColor.Provider>
    )
}

export default FuncaoA