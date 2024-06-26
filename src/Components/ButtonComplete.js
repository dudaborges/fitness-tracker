import React from 'react'

const ButtonComplete = ({ completeWorkout, workout }) => {
  return (
    <button className="btn-green" onClick={() => completeWorkout(workout.id)}>Concluir Treino</button>
  )
}

export default ButtonComplete
