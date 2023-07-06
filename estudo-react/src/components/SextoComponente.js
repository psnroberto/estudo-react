
function SextoComponente() {

    function aoEnviar() {

    }

    return (
        <form onSubmit={aoEnviar}>
            <h1>Este é o meu sexto componente!</h1>
            <p>Iremos trabalhar com formulários e entender o conceito de "useState".</p>

            <div>
                <label htmlFor='usuario'>Usuário:</label>
                <input type='text' id='usuario' name='usuario' placeholder='Informe o nome de usuário.'></input>
            </div>

            <div>
                <label htmlFor='senha'>Senha:</label>
                <input type='password' id='senha' name='senha' placeholder='Informe a senha.'></input>
            </div>

            <div>
                <label></label>
                <input type='submit'></input>
            </div>
        </form>
    )
}

export default SextoComponente