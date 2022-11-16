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
      <Pesquisa />
      <Repositorios />
      <footer>Desenvolvido por <a className='tentativa' href="https://www.linkedin.com/in/marta-santos-4a8309194/" target="_blank" >Marta S. Santos</a></footer>
    </div>
  )
}

export default App
