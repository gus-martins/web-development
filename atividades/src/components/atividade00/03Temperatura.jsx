const Temperatura = () => {

    const celsiusParaFahrenheit = (c) => {
        let f = (9 * c / 5) + 32
        return f
    }

    const fahrenheitParaCelsius = (f) => {
        let c = 5 * (f - 32) / 9
        return c
    }

    const kelvin = (k) => {
        let f = ((k - 273.15) * 1.8) + 32
        let c = k - 273.15
        return { f, c }
    }


    return (
        <div>
            <h1>A Temperatura de Celsius para Fahrenheit é: {celsiusParaFahrenheit(23)}</h1>
            <h1>A Temperatura de Fahrenheit para Celsius é: {fahrenheitParaCelsius(23)}</h1>
            <h1>A Temperatura de Kelvin para Celsius é: {kelvin(23).c}</h1>
            <h1>A Temperatura de Kelvin para Fahrenheit é: {kelvin(23).f} </h1>
        </div>
    )

}

export default Temperatura

