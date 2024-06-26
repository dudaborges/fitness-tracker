import React from "react";
import WorkoutDetailsInfo from "../Components/WorkoutDetailsInfo";
import '../Styles/WorkoutsDetails.css'
import ButtonBackMyPlan from "../Components/ButtonBackMyPlan";
import { useParams } from "react-router-dom";

const WorkoutsDetails = ({ workouts, completeWorkout }) => {

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
                <WorkoutDetailsInfo workout={workout} isInPlan={isInPlan} completeWorkout={completeWorkout} />

                <ButtonBackMyPlan />
            </div>

        </div>
    )
}

export default WorkoutsDetails