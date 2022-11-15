import './App.css'
import './compontes/Pesquisa'
import Repositorios from './compontes/Repositorios'
import Bio from './compontes/Bio'
import Pesquisa from './compontes/Pesquisa'


function App() {

  return (
    <div className="App">
      <Bio />
      <br /> <br />
      <Pesquisa/>
      <Repositorios />
      <footer>Desenvolvido por <span>Marta S. Saantos</span></footer>
    </div>
  )
}

export default App
