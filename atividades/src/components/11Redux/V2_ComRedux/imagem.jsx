//useSelector é utilizado para 
import { useSelector } from "react-redux";

const Imagem = ({ nome, imagem }) => {

    //receber uma função para transmitir o valor da variavel value
    const id = useSelector((state) => state.id.value)

    return (
        <div style={{ textAlign: "center" }}>
            <h1>ID: {id}</h1>
            <h1>{nome}</h1>
            <img
                src={imagem}
                alt={"pokemon"}
                style={{ width: "300px" }}
            />
        </div>
    )
}

export default Imagem