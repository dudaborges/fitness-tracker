import React from "react";
import Home from "./Pages/Home";
import MeuPlano from "./Pages/MeuPlano";
import DetalhesTreino from "./Pages/DetalhesTreino";
import Historico from "./Pages/Historico";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/meu-plano" element={<MeuPlano/>}></Route>
                <Route path="/detalhes-treino" element={<DetalhesTreino/>}></Route>
                <Route path="/historico" element={<Historico/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes