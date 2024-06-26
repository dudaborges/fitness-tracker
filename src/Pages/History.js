import React from "react";
import ItemWorkout from "../Components/ItemWorkout";
import '../Styles/History.css'
const History = ({ history }) => {

    return(
        <div>

            <h1>Histórico de Treinos Concluídos</h1>

            <div className="container-workouts">
                {
                history.length === 0 ?(
                    <p>Seus treinos concluídos aparecerão aqui</p>
                ) : (
                    history.map((workout) => (
                        <div>
                            <ItemWorkout key={workout.id} workout={workout}  />
                            <div className="info-treinos">
                                <p>Status: Concluído</p>
                                <span>Data de conclusão: {workout.completedDate}</span>
                            </div>
                        </div>
                    ))
                )}
                

            </div>

        </div>
    )
}

export default History