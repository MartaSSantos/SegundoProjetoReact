import { useState, useEffect } from 'react'
import Axios from 'axios'

function Repositorios() {
    const [repositorio, setRepositorio] = useState([])
    const [buscaTermo, setBuscaTermo] = useState('')
    const [repositoriosFiltrados, setRepositoriosFiltrados] = useState([])
    const baseURL = 'https://api.github.com/users/MartaSSantos/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setRepositorio(response.data)
        }
        getData()
    }, [])

    function pegaInput(event) {
        setBuscaTermo(event.target.value)
    }

    useEffect(() => {
        setRepositoriosFiltrados(repositorio.filter(repositorio => {
            return repositorio.name.includes(buscaTermo)
        }))
    }, [repositorio, buscaTermo])

    return (
        <>
            <div className="Search">
                <input placeholder="Digite um repo" onChange={pegaInput} />
                {repositoriosFiltrados.map(repositorio => {
                    return (
                        <>
                            <h3 key={repositorio.id}>{repositorio.name}</h3>
                            <p>{repositorio.description}</p>
                            <a href={repositorio.html_url}>Conferir</a>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Repositorios