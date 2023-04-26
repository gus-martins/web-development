import { cloneElement } from "react"
import Deckard from "./assets/img/BladeRunner.png"
import K from "./assets/img/BladeRunner2.png"
import { Children } from "react"

const Hero = ({ nome, img }) => {
    return (
        <div>
            <h2>Hero: {nome}</h2>
            <img
                src={img}
                style={{ width: "240px" }} />
        </div>
    )
}

const Enemy = ({ nome, img }) => {
    return (
        <div>
            <h2>Enemy: {nome}</h2>
            <img
                src={img}
                style={{ width: "240px" }} />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name="Agente Deckard" img={Deckard} />

            <Enemy name="Agente K" img={K} />
        </div>
    )
}

const Arena2 = ({ nome, children }) => {
    return (
        <div>
            <h1>
                Arena: {nome}
            </h1>
            {
                Children.map(
                    children,
                    (child) => {
                        return cloneElement(child, { arena: nome })
                    }
                )
            }
        </div>
    )
}



const World = (children) => {
    return (
        <>
            {children}
        </>
    )
}

export { Hero, Enemy, Arena, Arena2, World }
