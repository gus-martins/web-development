
const Filho = (props) => {
    const { peso, altura } = props


    const imc = () => {
        return peso / (altura * altura)
    }

    const Mensagem = (imc) => {
        if (imc < 18) {
            return (
                <div>
                    <h3>Abaixo do peso</h3>
                </div>
            )
        } else if (imc > 25) {
            return (
                <div>
                    <h3>Acima do peso</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Peso ideal</h3>
                </div>
            )
        }
    }

    return (
        <div>
            {Mensagem(imc(altura, peso))}
        </div>
    )

}

export default Filho