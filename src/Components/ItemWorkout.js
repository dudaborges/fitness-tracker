import '../Styles/ItemWorkout.css';


const ItemWorkout = ({workout}) => {
    return(
        <div className="item-treino">
        <h2>{workout.name}</h2>
        <p>{workout.description}</p>
        <p><span>Duração: {workout.duration}</span></p>
    </div>
    )
}

export default ItemWorkout