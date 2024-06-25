import React, { useState } from "react";
import ItemWorkout from "../Components/ItemWorkout";
import './Historico.css'
const Historico = () => {
    const [workouts, setWorkouts] = useState([
        {
            id: 1,
            name: "Treino de Cardio HIIT",
            description: "Alterna entre exercícios de alta intensidade, como sprints ou burpees, e períodos curtos de descanso ou atividade leve",
            duration: "20-30 minutos",
            isCompleted: false
        }
    ])

    return(
        <div>

            <h1>Histórico de Treinos Concluídos</h1>

            <div className="container-workouts">
                {workouts.map((workout) => (
                    <div>
                        <ItemWorkout key={workout.id} workout={workout}  />
                        <div className="info-treinos">
                            <p>Status: Concluído</p>
                            <span>Data de conclusão: 24/06</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Historico