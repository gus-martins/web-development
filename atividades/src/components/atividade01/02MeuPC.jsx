const PlacaMae = (props) => {
    const { nome, preco } = props

    return (
        <div>
            <h2>
                Nome da Placa Mãe: {nome}
            </h2>
            <h3>
                Preço: {preco}
            </h3>
        </div>
    )
}

const Memoria = (props) => {
    const { nome, preco } = props

    return (
        <div>
            <h2>
                Nome da Memoria: {nome}
            </h2>
            <h3>
                Preço: {preco}
            </h3>
        </div>
    )
}

const PlacaDeVideo = (props) => {
    const { nome, preco } = props

    return (
        <div>
            <h2>
                Nome da Placa de Video: {nome}
            </h2>
            <h3>
                Preço: {preco}
            </h3>
        </div>
    )
}

export { PlacaMae, Memoria, PlacaDeVideo }