import { Button, Card, CardBody, CardFooter, Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#9c89ff"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    },
  },
};


export default function VehicleCard({ thisVehicle }) {
  return (
    <Grommet theme={theme}>
    <Card pad="medium" className="single-vehicle" background="light-4">
      <div style={{
        height: 250, 
        width: 350, 
        backgroundImage:`url(${thisVehicle.filebase64})`, 
        backgroundPosition: "center center", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "contain",
      }} 
      />
      <CardBody pad="small"className="vehicle-info">
        <h2>{thisVehicle.make} {thisVehicle.model}</h2>
        <h3>{thisVehicle.year}</h3>
        <p>{thisVehicle.oil_specs}</p>
      </CardBody>
      <CardFooter>
        <Button secondary size="small" label="Log Maintenance"
        onClick={{}}/>
        <Button secondary size="small" label="Show Logs"
        onClick={{}}/>
      </CardFooter>
    </Card>
    </Grommet>
  )
}