import React, { useState } from "react";
import Home from "./Pages/Home";
import MeuPlano from "./Pages/MeuPlano";
import DetalhesTreino from "./Pages/DetalhesTreino";
import Historico from "./Pages/Historico";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    const [myPlan, setMyPlan] = useState([])

    const addWorkout = (workout) => {
        setMyPlan([...myPlan, workout])
    }

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home addWorkout={addWorkout} />} ></Route>
                <Route path="/meu-plano" element={<MeuPlano myPlan={myPlan} />}></Route>
                <Route path="/detalhes-treino" element={<DetalhesTreino/>}></Route>
                <Route path="/historico" element={<Historico />}></Route>
+            </Routes>
        </Router>
    )
}

export default AppRoutes