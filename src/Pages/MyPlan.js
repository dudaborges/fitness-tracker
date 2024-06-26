import '../Styles/MyPlan.css'
import React from "react";
import ButtonRed from "../Components/ButtonRed";
import ButtonSeeDetails from "../Components/ButtonSeeDetails";
import ItemWorkout from "../Components/ItemWorkout";


const MyPlan = ({ myPlan, removeWorkout, toDetails }) => {
    return(
        <div>
            
            <h1>Meu Plano</h1>
            {myPlan.length === 0 ? (
                <p className="info">Seus treinos aparecerão aqui!</p>
            ) : (
            <div className="container-workouts">
                {myPlan.map((workout) => (
                    <div>
                        <ItemWorkout key={workout.id} workout={workout}  />
                        <div className="container-btns">
                            <ButtonRed name="Remover" removeWorkout={removeWorkout} workout={workout} />
                            <ButtonSeeDetails name="Ver detalhes" workout={workout}  />
                        </div>
                    </div>
                ))}
            </div>
            )}

        </div>
    )
}

export default MyPlan