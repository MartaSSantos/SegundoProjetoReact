import filmes from "../dados"

export const Lista = () => {
    return (
        <div>
            {
                filmes.map(item => {
                    return (
                        <div key = {item.id
                } className = {`filha-${item.id}`} >
                            <h2>{item.nome}</h2>
                            <img src={item.imagem} />
                            <p>{item.descricao}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
