import React from "react";
import Navbar from "../Components/Navbar";
import ItemTreino from "../Components/ItemTreino";
import ButtonRed from "../Components/ButtonRed";
import ButtonGreen from "../Components/ButtonGreen";
import './MeuPlano.css'

const MeuPlano = () => {
    return(
        <div>
            <Navbar />

            <h1>Meu Plano</h1>

            <ul className="cards-treinos">
                <div>
                <ItemTreino 
                    name="Treino de Cardio HIIT" 
                    description="Alterna entre exercícios de alta intensidade, como sprints ou burpees, e períodos curtos de descanso ou atividade leve" duration="20-30 minutos" 
                    />

                    <div className="container-btns">
                        <ButtonRed name="Remover"/>
                        <ButtonGreen name="Ver detalhes" />
                    </div>

                </div>
            </ul>
        </div>
    )
}

export default MeuPlano