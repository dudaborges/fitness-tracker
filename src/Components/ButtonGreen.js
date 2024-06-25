import React from "react";
import './ButtonGreen.css'

const ButtonGreen = ({ name, addWorkout, workout }) => {
    return(
        <button className="btn-add" onClick={() => addWorkout(workout)}>
            { name }
        </button>
    )
}

export default ButtonGreen