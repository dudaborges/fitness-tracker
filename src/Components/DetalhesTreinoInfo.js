import React from "react";
import './DetalhesTreinoInfo.css'

const DetalhesTreinoInfo = (props) => {
    return(
        <div className="card-treino-info">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><span>Duração: </span>{props.duration}</p>
            <p>Data de conclusão</p>
        </div>
    )
}

export default DetalhesTreinoInfo