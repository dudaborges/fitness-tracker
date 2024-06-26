import React, { useState } from "react";
import Home from "./Pages/Home";
import MeuPlano from "./Pages/MeuPlano";
import DetalhesTreino from "./Pages/DetalhesTreino";
import Historico from "./Pages/Historico";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

const AppRoutes = () => {
    const [myPlan, setMyPlan] = useState([])
    const [history, setHistory] = useState([]);

    const addWorkout = (workout) => {
        setMyPlan([...myPlan, workout])
        alert('Plano adicionado com sucesso!');
    }

    const removeWorkout = (id) =>{
         const filterWorkouts = myPlan.filter(workout => workout.id !== id ? workout : null)
         setMyPlan(filterWorkouts)
         alert('Plano removido!');
    }

    const completeWorkout = (id) => {
        const completedWorkout = myPlan.find(workout => workout.id === id);
        if (completedWorkout) {
          completedWorkout.completedDate = new Date().toLocaleDateString();
          setHistory([...history, completedWorkout]);
        }
      };

    return(
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home addWorkout={addWorkout} />} ></Route>
                <Route path="/meu-plano" 
                element={<MeuPlano myPlan={myPlan} removeWorkout={removeWorkout} />}></Route>
                <Route path="/detalhes-treino/:id" element={<DetalhesTreino workouts={myPlan} completeWorkout={completeWorkout} />}></Route>
                <Route path="/historico" element={<Historico history={history} />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes