import React from "react";
import './ButtonRed.css'

const ButtonRed = (props) => {
    return(
        <button className="btn-red">{props.name}</button>
    )
}

export default ButtonRed