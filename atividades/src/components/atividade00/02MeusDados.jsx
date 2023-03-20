// const MyProps = ({ nome, curso, universidade }) => {
//     return (
//         <div>
//             <h1>Meu nome é: {nome}</h1>
//             <h1>Meu curso é: {curso}</h1>
//             <h1>Minha universidade é: {universidade}</h1>
//         </div>
//     )

// }

// versão 2
const MyProps = (props) => {
    return (
        <div>
            <h1>Meu nome é: {props.nome}</h1>
            <h1>Meu curso é: {props.curso}</h1>
            <h1>Minha universidade é: {props.universidade}</h1>
        </div>
    )

}

export default MyProps;