import logo from './logo.svg';
import './App.css';
import PrimeiroComponente from './components/PrimeiroComponente' // Estamos importando a função "primeiroComponente()" do arquivo JS "PrimeiroComponente". Se este arquivo tivesse mais de uma função, devemos indicar qual delas devemos importar;
import TerceiroComponente from './components/TerceiroComponente'
import styles from './components/TerceiroComponente.module.css'
import QuartoComponente from './components/QuartoComponente';
import QuintoComponente from './components/QuintoComponente';
import SextoComponente from './components/SextoComponente'
import SetimoComponente from './components/SetimoComponente';

function App() {

  // O React nos permite criar códigos em JavaScript integrados com HTML de forma rápida e dinâmica;

  // As nossas aplicações serão criadas sempre dentro de uma função, que por padrão é chamada de "App()". Esta função é o centro de nossa aplicação e sempre terá como retorno a parte HTML da mesma;

  // Dentro da parte HTML, podemos incluir componentes de JavaScript, como funções, variáveis e etc. Para que um componente JavaScript seja utilizado dentro do HTML, ele deverá ser colocado dentro de chaves, "{}";

  function nomeCompleto(nome, sobrenome) {
    const nomeCompleto = nome + ' ' + sobrenome
    return nomeCompleto
  }

  const url = 'https://img.freepik.com/vetores-premium/homem-programador-feliz-de-codificacao-binaria-com-laptop_51635-7269.jpg'

  return (
    <div className="App">
      <h1>Meu primeiro React!</h1>
      <p>Eu, {nomeCompleto('Roberto', 'Pereira')}, estou muito feliz em começar meus estudos com o React.</p>

      <img src={url} alt='Programador Feliz'></img>

      <PrimeiroComponente /> {/* Utilizando a função importada de outro arquivo*/}

      <h1 className={styles.terceiroContainer}>
        Este é o meu terceiro componente!
      </h1>
      <TerceiroComponente nome='Roberto' idade='31' cidade='Contagem' />
      <TerceiroComponente nome='Rubia' idade='34' cidade='Belo Horizonte' />
      <QuartoComponente/>
      <QuintoComponente/>
      <SextoComponente/>
      <SetimoComponente/>
    </div>
  );
}

// Ao final, devemos exportar a função ("App()" neste caso) para que esteja disponível para utilização no projeto:

export default App;
