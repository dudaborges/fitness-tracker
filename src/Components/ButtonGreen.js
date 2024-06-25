import React from "react";
import './ButtonGreen.css'

const ButtonGreen = (props) => {
    return(
        <button className="btn-add" onClick={() => props.function(props.args)}>
            {props.name}
        </button>
    )
}

export default ButtonGreen