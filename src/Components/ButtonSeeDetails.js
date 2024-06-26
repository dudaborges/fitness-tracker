import React from "react";
import './ButtonGreen.css'
import { Link } from 'react-router-dom';


const ButtonSeeDetails = ({ name, workout}) => {
    return(
        <Link to={`/detalhes-treino/${workout.id}`} ><button className="btn-green">{ name }</button></Link>
    )
}

export default ButtonSeeDetails