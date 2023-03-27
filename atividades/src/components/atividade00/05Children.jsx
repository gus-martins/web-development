import { Children } from "react"

// V0
// const Supermercado = (props) => {
//     return (
//         <div>
//             <h2>Supermercado: {props.nome}</h2>
//             {props.children}
//         </div>
//     )
// }

//V1
const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h2>Supermercado: {nome}</h2>
            {
                Children.map(
                    children,
                    (filho) => {
                        return (
                            <div style={{ backgroundColor: "red" }}>
                                {filho}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}



const Legume = ({ nome }) => {
    return (
        <div>
            <h2>Legume: {nome}</h2>
        </div>
    )
}

const Bebida = ({ nome }) => {
    return (
        <div>
            <h2>Supermercado: {nome}</h2>
        </div>
    )
}

export { Supermercado, Legume, Bebida }