import React from "react";
import DetalhesTreinoInfo from "../Components/DetalhesTreinoInfo";
import './DetalhesTreino.css'
import ButtonBackMyPlan from "../Components/ButtonBackMyPlan";
import { useParams } from "react-router-dom";

const DetalhesTreino = ({ workouts, completeWorkout }) => {

    const { id } = useParams()
    const workout = workouts.find(workout => workout.id === parseInt(id))
    const isInPlan = workouts.some(workout => workout.id === parseInt(id));

    if (!workout) {
        return <p>Treino não encontrado!</p>
    }
    return (
        <div>
            <h1>Detalhes do Treino</h1>

            
            <div className="container-workout-details">
                <DetalhesTreinoInfo workout={workout} isInPlan={isInPlan} completeWorkout={completeWorkout} />

                <ButtonBackMyPlan />
            </div>

        </div>
    )
}

export default DetalhesTreino