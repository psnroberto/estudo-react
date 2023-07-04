import SegundoComponente from './SegundoComponente'
import styles from '../components/PrimeiroComponente.module.css'

function PrimeiroComponente(){
    return (
        <div className={styles.primeiroContainer}>
            <h1>E este é o meu primeiro componente!</h1>
            <p>Podemos criar nossas lógicas e funções em arquivos separados, exportá-los para depois importá-los em nossa aplicação central.</p>
            <SegundoComponente/> {/*Forma de utilizar componentes importados de outros arquivos JS.*/}
        </div>
    )
}

export default PrimeiroComponente;

// Podemos criar as nossas lógicas, funções e etc. em arquivos JS separados e depois exportá-los para estejam disponíveis para a utilização em todo projeto;