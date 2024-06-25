import React from "react";
import DetalhesTreinoInfo from "../Components/DetalhesTreinoInfo";
import './DetalhesTreino.css'
import ButtonBack from "../Components/ButtonBack";

const DetalhesTreino = () => {
    
    return (
        <div>

            <h1>Detalhes do Treino</h1>
            <div className="container-workout-details">
                <DetalhesTreinoInfo
                name="Treino de Cardio HIIT" 
                description="Alterna entre exercícios de alta intensidade, como sprints ou burpees, e períodos curtos de descanso ou atividade leve" duration="20-30 minutos" 
                date=""
                />

                <ButtonBack />
            </div>

        </div>
    )
}

export default DetalhesTreino