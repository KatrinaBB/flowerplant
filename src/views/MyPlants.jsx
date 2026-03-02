import { useState, useEffect } from "react";

export default function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    scientificName: "",
    light: "",
    watering: "",
    soil: "",
    level: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myPlants")) || [];
    setPlants(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(plants));
  }, [plants]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addPlant() {
    if (!form.name.trim()) return;

    setPlants([...plants, { ...form, id: Date.now() }]);

    setForm({
      name: "",
      scientificName: "",
      light: "",
      watering: "",
      soil: "",
      level: ""
    });
  }

  function startEdit(plant) {
    setEditingId(plant.id);
    setForm({
      name: plant.name,
      scientificName: plant.scientificName,
      light: plant.light,
      watering: plant.watering,
      soil: plant.soil,
      level: plant.level
    });
  }

  function saveEdit() {
    setPlants(
      plants.map((p) =>
        p.id === editingId ? { ...p, ...form } : p
      )
    );

    setEditingId(null);

    setForm({
      name: "",
      scientificName: "",
      light: "",
      watering: "",
      soil: "",
      level: ""
    });
  }

  function deletePlant(id) {
    setPlants(plants.filter((p) => p.id !== id));
  }

  const filtered = plants.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );



  return (
    <div>
      <h2>My Plants</h2>

      <input
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <h3>{editingId ? "Edit Plant" : "Add a Plant"}</h3>

      <div className="form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="scientificName" placeholder="Scientific Name" value={form.scientificName} onChange={handleChange} />
        <input name="light" placeholder="Light" value={form.light} onChange={handleChange} />
        <input name="watering" placeholder="Watering" value={form.watering} onChange={handleChange} />
        <input name="soil" placeholder="Soil" value={form.soil} onChange={handleChange} />
        <input name="level" placeholder="Level" value={form.level} onChange={handleChange} />

        {editingId ? (
          <button onClick={saveEdit}>Save Changes</button>
        ) : (
          <button onClick={addPlant}>Add Plant</button>
        )}
      </div>

      <h3>Your Collection</h3>

      <div className="plant-grid">
        {filtered.map((p) => (
          <div key={p.id} className="plant-card">
            <h4>name:{p.name}</h4>
            <p>scientific name:{p.scientificName}</p>
            <p>light:{p.light}</p>
            <p>watering:{p.watering}</p>
            <p>soil:{p.soil}</p>
            <p>level:{p.level}</p>

            <button onClick={() => startEdit(p)}>Edit</button>
            <button onClick={() => deletePlant(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
