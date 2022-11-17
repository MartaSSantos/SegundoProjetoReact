import './App.css'

import  Repositorios  from './componets/Repositorios'
import Bio from './componets/Bio'



function App() {

  return (
    <div className="App">
      <Bio />
      <br /> <br />
      <Repositorios />
      <footer>Desenvolvido por <a className='tentativa' href="https://www.linkedin.com/in/marta-santos-4a8309194/" target="_blank" >Marta S. Santos</a></footer>
    </div>
  )
}

export default App
