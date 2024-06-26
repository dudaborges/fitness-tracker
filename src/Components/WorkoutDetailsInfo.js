import React from "react";
import '../Styles/WorkoutsDetailsInfo.css'
import ButtonComplete from "./ButtonComplete";

const WorkoutDetailsInfo = ({ workout, isInPlan, completeWorkout }) => {
    return(
        <div className="card-treino-info">
            <h2>{workout.name}</h2>
            <p>{workout.description}</p>
            <p><span>Duração: </span>{workout.duration}</p>
            {
                workout.completedDate ? (
                    <p><span>Data de conclusão:</span> {workout.completedDate}</p>
                ) : isInPlan ? (
                    <ButtonComplete completeWorkout={completeWorkout} workout={workout} />
                ) : (
                    <p>É necessário que o treino esteja no seu plano para que seja possível concluí-lo.</p>
                )
            }
        </div>
    )
}

export default WorkoutDetailsInfo