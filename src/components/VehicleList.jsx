import { Spinner } from "grommet";
import { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState()
  useEffect(() => {
    fetch(process.env.REACT_APP_ENDPOINT)
      .then(res => res.json())
      .then(setVehicles)
      .catch(alert)
  }, [])
  return (
    <section className="vehicle-list">
      {!vehicles
        ? <Spinner size="xlarge" color="#9c89ff"/>
        : vehicles.map(thisVehicle => 
          <VehicleCard key={thisVehicle._id} thisVehicle={thisVehicle} />)
        }
    </section>
  )
}