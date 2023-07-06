
// Em React, podemos adicionar eventos aos elementos HTML de forma rápida diretamente no próprio elemento, como no exemplo abaixo:

function QuintoComponente() {

    function eventoAtivar() {
        window.alert('Opa! Estou ativado!')
    }

    function eventoDesativar() {
        window.alert('Ops! Estou desativado :(')
    }

    return (
        <div>
            <h1>Este é o meu quinto componente!</h1>
            <p>Podemos adicionar eventos diretamente nos elementos HTML retornados pelos nossos componentes. Clique nos botões abaixo para verificar!</p>
            <button onClick={eventoAtivar}>Ativar!</button>
            <button onClick={eventoDesativar}>Desativar!</button>
        </div>
    )
}

export default QuintoComponente