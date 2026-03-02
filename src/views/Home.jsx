import myimage from "../assets/shopflower.jpg"


export default function Home() {

  const predefinedplants = [
    {id: 1, name: "Rose", scientificName: "Rosa", light:"Full sun", watering:"Water when the top inch of soil is dry", soil:"Well-drained soil", level:"Easy" },
    {id: 2, name: "Snake Plant", scientificName: "Sansevieria", light:"Low to bright indirect light", watering:"Water when the soil is completely dry", soil:"Well-draining potting mix", level:"Easy" },
    {id: 3, name: "Spider Plant", scientificName: "Chlorophytum comosum", light:"Bright, indirect light", watering:"Water when the top inch of soil is dry", soil:"Well-draining potting mix", level:"Easy" },
    {id: 4, name: "Fiddle Leaf Fig", scientificName: "Ficus lyrata", light:"Bright, indirect light", watering:"Water when the top inch of soil is dry", soil:"Well-draining potting mix", level:"Intermediate" },
    {id: 5, name: "Peace Lily", scientificName: "Spathiphyllum", light:"Low to bright indirect light", watering:"Keep soil consistently moist but not waterlogged", soil:"Well-draining potting mix", level:"Easy" },
  ];


  return (
    <>
      <img className="shop-image" src={myimage} alt="Shop Flower"/>

      <h1>Welcome to FlowerPlant!</h1>

      <p>Your one-stop shop for all things plants.
      Whether you're a seasoned green thumb or just starting out,
      we have everything you need to cultivate your indoor jungle.
      Explore our wide selection of plants, from low-maintenance succulents to vibrant flowering varieties.
      Our expert care guides and tips will help you nurture your plants to thrive.
      Join our community of plant lovers and share your plant journey with us!</p>

      <div className="plant-grid">
        {predefinedplants.map(plant => (
          <div key={plant.id} className="plant-card">
            <h3>{plant.name} ({plant.scientificName})</h3>
            <p><strong>Light:</strong> {plant.light}</p>
            <p><strong>Watering:</strong> {plant.watering}</p>
            <p><strong>Soil:</strong> {plant.soil}</p>
            <p><strong>Care Level:</strong> {plant.level}</p>
          </div>
        ))
        }
      </div>
    </>
  )
}
