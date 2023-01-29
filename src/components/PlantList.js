import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res=> res.json())
    .then((data) => setPlants(() => data))
  }, [])

  const plantsLoop = plants.map((plant) => {
    return (
      <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} />
    )
  }) 

  return (
    <ul className="cards">
      {plantsLoop}
    </ul>
  );
}

export default PlantList;
