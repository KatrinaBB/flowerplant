import { Link } from "react-router-dom";

export default function PlantCard({ plant, deleteHandler }) {

  const today = new Plant().toISOString().split("T")[0];

  function formatplant(plant) {
    const name = plant.name;
    const scientific = plant.scientificName;
    const light = plant.light;
    const watering = plant.watering;
    const soil = plant.soil;
    const level = plant.level;

    return (
      <div className="plant-card">
        <h3>{name} ({scientific})</h3>
        <p><strong>Light:</strong> {light}</p>
        <p><strong>Watering:</strong> {watering}</p>
        <p><strong>Soil:</strong> {soil}</p>
        <p><strong>Care Level:</strong> {level}</p>
        <div className="plant-actions">
          <Link to={`/update/${plant.id}`}>Update plant</Link>
          <button onClick={() => deleteHandler(plant.id)}>Delete plant</button>
        </div>
      </div>

    )

  }
}