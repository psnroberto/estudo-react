
// Os "hooks" em React são uma forma de "puxar" métodos e funções prontas da biblioteca do React, com o intuito de simplificar a execução de determinadas atividades. Eles servem para monitorar o estado de elementos, alterar dados, e etc. de forma simplificada;

// Eles devem sempre ser importados no topo da linha de código do componente, diretamente da biblioteca do React, conforme linha abaixo:

import { useState } from 'react'

function SextoComponente() {

    // Neste exemplo, começaremos como o hook "useState", que tem como função monitorar o estado de um elemento e atualizá-lo caso necessário;

    // O hook "useState" aceita um estado inicial e retorna dois valores: o estado atual e a função que atualizado o estado;

    // Abaixo criaremos duas variáveis via desestruturação, "nome" e "setNome" (qualquer nome pode ser dado, mas essas são as formas convencionais). A primeira variável será o estado inicial, que poderá ou não ser atualizado. A segunda variável é um função que atualiza o valor da primeira;

    // Podemos definir o estado inicial para a primeira variável dentro dos parênteses do "useState", como na linha abaixo:

    const [nome, setNome] = useState('(O nome informado aparecerá aqui!)')
    const [number, setNumber] = useState(0)

    return (
        <div>
            <h1>Este é o meu sexto componente!</h1>
            <h2>Iremos entender a treinar o conceito de "hooks" e utilizaremos o "useState".</h2>
            <h2>Meu nome é: {nome}</h2>
            <div>
                <label htmlFor='nome'>Informe o seu nome:</label>
                <input type='text'
                    id='nome'
                    name='nome'
                    autoComplete='off'
                    onChange={(event) => { setNome(event.target.value) }} // Criamos um gatilho "onChange" para disparar o método "setNome" (que atualizará o valor de "nome") no input de texto. Ou seja, monitoramos o input e, qualquer alteração que houver nele, o método "setNome" atualizará o valor de "nome", em tempo real;
                ></input>
            </div>

            {/*Abaixo iremos monitorar o valor da variável "number" e colocaremos um gatilho "onClick" em dois botões, um para aumentar e o outro para diminuir o valor desta variável. Sempre que os botões forem clicados, o método "setNumber" irá atualizar o valor da variável "number", e esta será mostrada no parágrafo*/}

            <div>
                <h2>O número abaixo será atualizado sempre que o botão for clicado:</h2>
                <p>{number}</p>
                <button onClick={() => { setNumber(number + 1) }}>Aumente o número!</button>
                <button onClick={() => { setNumber(number - 1) }}>Diminua o número!</button>
            </div>
        </div>
    )
}

export default SextoComponente