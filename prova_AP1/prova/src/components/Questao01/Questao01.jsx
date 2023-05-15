import { useEffect, useState } from "react";

function Questao01X(props) {
    return (
        <div>
            <h1>Questão 01 - X</h1>
            <Questao01Y alunos={props.alunos} /> {/* Passando o objeto alunos para o componente Questao01Y */}
        </div>
    );
}

function Questao01Y(props) {
    const [medias, setMedias] = useState([]); // Vetor de médias

    useEffect(() => {
        const medias = props.alunos.map((aluno) => { // Calculando a média de cada aluno percorrendo com map 
            return (aluno.notas.ap1 + aluno.notas.ap2) / 2;
        });
        setMedias(medias); // Armazenando as médias no vetor
    }, [props.alunos]); // Executando o useEffect quando o objeto alunos for alterado

    return (
        <div>
            <h2>Questão 01 - Y</h2>
            {medias.map((media, index) => {  // Imprimindo os nomes dos alunos com média >= 7
                if (media >= 7) {
                    return <p key={index}>{props.alunos[index].nome}</p>; //utilizando key para identificar cada elemento e imprimir o nome do aluno
                }
            })}
        </div>
    );
}

export default Questao01X;