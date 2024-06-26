import React from "react";
import '../Styles/ButtonBack.css'
import { Link } from 'react-router-dom';

const ButtonBackMyPlan = () => {
    return (
        <Link to="/meu-plano"><button className="btn-back">Voltar</button></Link>   
    )
}

export default ButtonBackMyPlan