import React from "react"

//V0
// function HelloWorld() {
//     return (
//     <dix>
//         <h1>teste function</h1>
//     </dix>
//     )
// }

//V1
// const HelloWorld = () => {
//     let x = 2
//     let y = 5
//     let res = x + y
//     return (
//         <div>
//             <h1>teste constante {res + 10}</h1>
//         </div>
//     )
// }

// const HelloWorld = () => {
//     return (
//         <div>
//             <hi1>teste constante 1 instrução</hi1>
//         </div>
//     )
// }

//V3
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>teste classe</h1>
            </div>
        )
    }
}

export default HelloWorld