import { Card, CardBody } from "grommet";

export default function VehicleCard({ thisVehicle }) {
  return (
    <Card className="single-vehicle" background="light-2">
      <div style={{
        height: 250, 
        width: 350, 
        backgroundImage:`url(${thisVehicle.filebase64})`, 
        backgroundPosition: "center center", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "contain",
        margin:10
        }} 
      />
      <CardBody>
        <h2>{thisVehicle.year}</h2>
        <h3>{thisVehicle.make} {thisVehicle.model}</h3>
      </CardBody>
    </Card>
  )
}