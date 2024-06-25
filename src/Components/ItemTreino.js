import React from "react";
import './ItemTreino.css';

const ItemTreino = (props) => {


    return(
        <div className="item-treino">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><span>Duração:</span> {props.duration}</p>
        </div>
    )
}

export default ItemTreino