import Navbar from "../Components/Navbar";
import './MeuPlano.css'
import React from "react";
import ButtonRed from "../Components/ButtonRed";
import ButtonGreen from "../Components/ButtonGreen";
import ItemWorkout from "../Components/ItemWorkout";


const MeuPlano = ({ myPlan }) => {
    return(
        <div>
            
            <Navbar />
            <h1>Meu Plano</h1>
            {myPlan.length === 0 ? (
                <p className="info">Seus treinos aparecerão aqui!</p>
            ) : (
            <div className="container-workouts">
                {myPlan.map((workout) => (
                    <div>
                        <ItemWorkout key={workout.id} workout={workout}  />

                        <div className="container-btns">
                            <ButtonRed name="Remover"/>
                            <ButtonGreen name="Ver detalhes" />
                        </div>
                    </div>
                ))}
            </div>
            )}

        </div>
    )
}

export default MeuPlano