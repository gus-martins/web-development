// Versão com function
// function MeusDados() {
//     return (
//         <div>
//             <h1>Francisco Gustavo Martins de Sousa</h1>
//             <h1>Ciência da Computação</h1>
//             <h1>Universidade Fedaral do Ceará</h1>
//         </div>
//     )
// }

// Versão arrow function com return
// const MeusDados = () => {
//     return (
//         <div>
//             <h1>Francisco Gustavo Martins de Sousa</h1>
//             <h1>Ciência da Computação</h1>
//             <h1>Universidade Fedaral do Ceará</h1>
//         </div>
//     )
// }

// Versão arrow function sem return
// const MeusDados = () => {
//         <div>
//             <h1>Francisco Gustavo Martins de Sousa</h1>
//             <h1>Ciência da Computação</h1>
//             <h1>Universidade Fedaral do Ceará</h1>
//         </div>
// }

import React from "react";
class MeusDados extends React.Component {
    render() {
        return (
            <div>
                <h1>Francisco Gustavo Martins de Sousa</h1>
                <h1>Ciência da Computação</h1>
                <h1>Universidade Fedaral do Ceará</h1>
            </div>
        )
    }
}


export default MeusDados;