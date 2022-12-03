import { Button, Card, CardBody, CardFooter, Grommet } from "grommet";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

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
  const [flip, setFlip] = useState(false);
  return (
    <Grommet theme={theme}>
      <ReactCardFlip isFlipped={flip}
        flipDirection="horizontal">

        <Card pad="medium" className="single-vehicle" background="light-4">
          <div style={{
            height: 250,
            width: 350,
            backgroundImage: `url(${thisVehicle.filebase64})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          />
          <CardBody pad="small" className="vehicle-info">
            <h2>{thisVehicle.make} {thisVehicle.model}</h2>
            <h3>{thisVehicle.year}</h3>
            <p>{thisVehicle.oil_specs}</p>
          </CardBody>
          <CardFooter>
            <Button secondary size="small" label="Log Maintenance"
              onClick={{}} />
            <Button secondary size="small" label="Show Logs"
              onClick={() => setFlip(!flip)} />
          </CardFooter>
        </Card>

        <Card pad="medium" background="light-4">
          <CardBody pad="small" className="vehicle-info">
            <h2>Logs go here...</h2>
          </CardBody>
          <CardFooter>
            <Button secondary size="small" label="Log Maintenance"
              onClick={{}} />
            <Button secondary size="small" label="Show Vehicle"
              onClick={() => setFlip(!flip)} />
          </CardFooter>
        </Card>

      </ReactCardFlip>
    </Grommet>
  )
}