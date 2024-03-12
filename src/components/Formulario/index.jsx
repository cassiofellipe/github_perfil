import { useState, useEffect } from "react"; 

const Formulario = () => {
    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    // let [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O Estado mudou")
    });

    // const alteraNome = (evento) => {
    //     setNome(estadoAnterior => {
    //         console.log(estadoAnterior);
    //         return evento.target.value
    //     }) 
    // }

    const renderizaresultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        // console.log(media);

        if (media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return(
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (                
                <li>{item}</li>
            ))}
            </ul>


            <input type="number" placeholder="Nota matéria A" onChange={evento => setmateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))} />                      
            {renderizaresultado()}
        </form>
    )
}

export default Formulario