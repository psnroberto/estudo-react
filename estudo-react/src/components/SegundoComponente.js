import styles from '../components/SegundoComponente.module.css'

function SegundoComponente(){
    return (
        <div className={styles.segundoContainer}>
            <h1>Este é o meu segundo componente!</h1>
            <p>Será importado para dentro do primeiro componente.</p>
        </div>
    )
}

export default SegundoComponente