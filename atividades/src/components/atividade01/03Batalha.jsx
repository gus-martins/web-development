import Deckard from "./img/BladeRunner.png"
import K from "./img/BladeRunner2.png"

const Hero = ({ nome, img }) => {
    return (
        <div>
            <h2>Hero: {nome}</h2>
            <img src={img} />
        </div>
    )
}

const Enemy = ({ nome, img }) => {
    return (
        <div>
            <h2>Enemy: {nome}</h2>
            <img src={img} />
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

}



const World = (props) => {
    return (
        <>
            {props.children}
        </>
    )
}

export { Hero, Enemy, Arena, World }
