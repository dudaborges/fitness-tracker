import React from "react";
import Navbar from "../Components/Navbar";
import ItemTreino from "../Components/ItemTreino";
import './Historico.css'
const Historico = () => {
    return(
        <div>
            <Navbar />

            <h1>Histórico de Treinos Concluídos</h1>

            <ul className="cards-treinos">

                <div>
                    <ItemTreino 
                    name="Treino de Força Total" 
                    description="Envolve levantamento de peso com foco em todos os principais grupos musculares: pernas, costas, peito, braços e core" duration="45-60 minutos" 
                    />
                    <div className="info-treinos">
                        <p>Status: Concluído</p>
                        <span>Data de conclusão: 24/06</span>
                    </div>

                </div>
            </ul>
        </div>
    )
}

export default Historico