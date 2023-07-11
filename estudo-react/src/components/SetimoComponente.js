
import { useState } from 'react'

// Renderização Condicional

// Podemos definir em nossos projetos React que determinados elementos HTML só serão renderizados/carregados se determinada condição for verdadeira;

function SetimoComponente() {

    function verificaNumero() { // Função para verificar se o número digitaro é par;
        if (numero % 2 === 0 || numero === 0) return true
    }

    const [numero, setNumero] = useState(0) // Faremos o rastreio e atualização dos valores digitados no input deste componente através do "useState()"

    return (
        <div>
            <h1>Este é o meu sétimo componente!</h1>
            <p>Podemos definir em projetos React condições para que determinado elemento HTML seja carregado/renderizado. Caso a condição seja verdadeira, o elemento é carregado; caso contrário, não!</p>

            <h2>Iremos verificar se o número digitado é par!</h2>
            <label htmlFor="inputNumero">Digite um número aqui:</label>
            <input
                type="number"
                id="inputNumero"
                name="inputNumero"
                onChange={(event) => { setNumero(event.target.value) }} // O "setNumero" irá atualizar, em tempo real, o valor da variável "numero" com o valor digitado no input do formulário;
            >
            </input>

            {/*
            
            - Podemos fazer a verificação de uma única condição em nossos JSX através da sintaxe "{VARIÁVEL/FUNÇÃO => CONDIÇÃO => && (RETORNO CASO A CONDIÇÃO SEJA ATENDIDA)};
            
            - Funciona como um "if/else", porém utilizando os operadores ternários "&&" e ""; 
            
            */}

            {verificaNumero() === true ? (
                <div>
                    <p>O número digitado é par!</p>
                </div>   
            ) : 
                <div>
                    <p>O número digitado é ímpar!</p>
                </div>

            }
        </div>
    )
}

export default SetimoComponente