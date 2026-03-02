import PlantCard from "./PlantCard";

export default function PlantForm({ plants, setPlants }) {

    function deletePlantHandler(id) {
        const isConfirmed = window.confirm("Are you sure you want to delete this plant?");
        if (isConfirmed) {
            setPlants(plants.filter(plant => plant.id !== id));
        }
    }

    return (
        <div>
            {plants.map(plant => (
                <PlantCard 
                key={plant.id}
                plant={plant}
                deleteHandler={deletePlantHandler}
                />
            ))}
        </div>
    );  
}