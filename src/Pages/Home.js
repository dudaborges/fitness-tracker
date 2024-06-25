import React from "react";
import ItemTreino from "../Components/ItemTreino";
import './Home.css'
import ButtonGreen from "../Components/ButtonGreen";
import Navbar from "../Components/Navbar";

const Home = () => {
    return(
        <div id="Home">
            <Navbar />
            <h1>Treinos Recomendados</h1>
            <ul className="cards-treinos">
                <div>
                    <ItemTreino 
                    name="Treino de Cardio HIIT" 
                    description="Alterna entre exercícios de alta intensidade, como sprints ou burpees, e períodos curtos de descanso ou atividade leve" duration="20-30 minutos" 
                    />
                    <div className="container-btn">
                        <ButtonGreen name="Adicionar no Meu Plano" />
                    </div>
                </div>

                <div>
                    <ItemTreino 
                    name="Treino de Força Total" 
                    description="Envolve levantamento de peso com foco em todos os principais grupos musculares: pernas, costas, peito, braços e core" duration="45-60 minutos" 
                    />

                    <div className="container-btn">
                        <ButtonGreen name="Adicionar no Meu Plano" />
                    </div>
                </div>

                <div>
                    <ItemTreino 
                    name="Yoga Vinyasa" 
                    description="Série de posturas de yoga fluidas, coordenadas com a respiração, para melhorar a flexibilidade e a força" 
                    duration="60 minutos"
                    />

                    <div className="container-btn">
                        <ButtonGreen name="Adicionar no Meu Plano" />
                    </div>
                </div>

                <div>
                    <ItemTreino 
                    name="Treino de Core" 
                    description="Concentra-se em fortalecer os músculos abdominais, oblíquos e lombares com exercícios como pranchas, crunches e leg raises" 
                    duration="15-20 minutos."
                    />


                    <div className="container-btn">
                        <ButtonGreen name="Adicionar no Meu Plano" />
                    </div>
                </div>
            </ul>

        </div>

    )
}

export default Home