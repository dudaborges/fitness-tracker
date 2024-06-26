import React from "react";
import '../Styles/ButtonGreen.css'

const ButtonAdd = ({ name, addWorkout, workout }) => {
    return(
        <button className="btn-green" onClick={() => addWorkout(workout)}>
            { name }
        </button>
    )
}

export default ButtonAdd