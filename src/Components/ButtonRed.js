import React from "react";
import './ButtonRed.css'

const ButtonRed = ({ name, removeWorkout, workout }) => {
    return(
        <button className="btn-red" onClick={() => removeWorkout(workout.id)}>{name}</button>
    )
}

export default ButtonRed