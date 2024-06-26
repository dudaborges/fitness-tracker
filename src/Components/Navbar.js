import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/meu-plano">Meu plano</Link>
            <Link to="/historico">Histórico dos Treinos</Link>
        </nav>
    )
}

export default Navbar