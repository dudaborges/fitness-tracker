import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/meu-plano">Meu plano</a>
            <a href="/detalhes-treino">Detalhes dos Treinos</a>
            <a href="/historico">Histórico dos Treinos</a>
        </nav>
    )
}

export default Navbar