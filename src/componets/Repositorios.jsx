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
            <input placeholder="Digite um repositorio 😃" onChange={pegaInput} />
            <div className=' teste' >

                {repositoriosFiltrados.map(repositorio => {
                    return (
                        <div>
                            <h3 className='para' key={repositorio.id}>{repositorio.name}</h3>
                            <a className='tentativa' target="_blank" href={repositorio.html_url}>Conferir</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Repositorios