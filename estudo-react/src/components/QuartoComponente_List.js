
// Podemos, através das PropTypes, declarar e validar propriedades dos nossos componentes. Trata-se de uma biblioteca padrão de projetos React e devemos importá-las de "prop-types", conforme exemplo abaixo:

// IMPORTANTE: A biblioteca a ser importada se escrece com a primeira letra maiúscula, "PropTypes". Já o objeto onde definiremos as propriedades escreve-se com a primeira letra minúsculas, "propTypes";

import PropTypes from 'prop-types'

function List({marca, anoLancamento}){
    return (
        <li>{marca} - {anoLancamento}</li>
    )
}

// Acessamos o objeto para definir as propriedades (LEMBRANDO DA PRIMEIRA LETRA MINÚSCULA) e fazemos algumas validações:

List.propTypes = {
    marca: PropTypes.string.isRequired, // Estamos informando que a propriedade "marca" espera receber uma string, e que seu preenchimento é obrigatório ("isRequired") ;
    anoLancamento: PropTypes.number // Estamos informando que a propriedade "anoLancamento" espera receber um number;
}

// Podemos definir também valores padrão para cada propriedade, caso não sejam informados. Importante notar que, caso definamos algum valor padrão para determinada propriedade, o "isRequired" não terá efeito:

List.defaultProps = {
    marca: 'A marca não foi informada',
    anoLancamento: 0
}

export default List