
import List from "./QuartoComponente_List"

function QuartoComponente() {
    return (
        <> {/*"Fragments" - Podemos retornar elementos sem a criação de uma div.*/}
            <h1>Este é o meu quarto componente!</h1>
            <p>Podemos retornar elementos HTML sem necessariamente criar uma div para isso, simplesmente abrindo e fechando tags vazias. Esta técnica é chamada de "fragments"!</p>
            <ul>
                <List marca='Ferrari' anoLancamento={1965} /> {/*Para informar um number como argumento, devemos colocá-lo entre chaves, "{}"*/}
                <List marca='BMW' anoLancamento={1972} />
                <List marca='Fiat' anoLancamento={1992} />
                <List/> {/*As validações definidas serão acionadas.*/}
            </ul>
        </>
    )
}

export default QuartoComponente