import styles from '../components/TerceiroComponente.module.css'

function TerceiroComponente({nome: nome, idade: idade, cidade: cidade}){
    return(
        <div className={styles.terceiroContainer}>
            <p>Me chamo {nome}, tenho {idade} anos e moro em {cidade}.</p>
        </div>
    )
}

// Podemos criar componentes dinâmicos, que recebem como argumentos objetos com propriedades definidas por nós. Ao utilizar estes componentes em outra parte da nossa aplicação, podemos definir diretamente o valor de cada argumento;

export default TerceiroComponente