import React, { useState } from "react";
import ItemWorkout from "../Components/ItemWorkout";
import './Home.css'
import ButtonGreen from "../Components/ButtonGreen";


const Home = ({ addWorkout}) => {
    const [workouts, setWorkouts] = useState([
        {
            id: 1,
            name: "Treino de Cardio HIIT",
            description: "Alterna entre exercícios de alta intensidade, como sprints ou burpees, e períodos curtos de descanso ou atividade leve",
            duration: "20-30 minutos",
            isCompleted: false
        },
        {
            id: 2,
            name: "Treino de Força Total",
            description: "Envolve levantamento de peso com foco em todos os principais grupos musculares: pernas, costas, peito, braços e core",
            duration: "45-60 minutos",
            isCompleted: false
        },
        {
            id: 3,
            name: "Treino de Core",
            description: "Concentra-se em fortalecer os músculos abdominais, oblíquos e lombares com exercícios como pranchas, crunches e leg raises",
            duration: "15-20 minutos",
            isCompleted: false
        },
        {
            id: 4,
            name: "Corrida de Longa Distância",
            description: "Corrida contínua a um ritmo confortável para melhorar a resistência cardiovascular e muscular",
            duration: "60-90 minutos",
            isCompleted: false
        }
    ])


    return(
        <div id="Home">
            <h1>Treinos Recomendados</h1>

            <div className="container-workouts">
                {workouts.map((workout) => (
                    <div>
                        <ItemWorkout key={workout.id} workout={workout}  />
                        <div className="container-btn">
                            <ButtonGreen name="Adicionar no Meu Plano" addWorkout={addWorkout} workout={workout} />
                        </div>
                    </div>
                ))}


            </div>
        </div>

    )
}

export default Home