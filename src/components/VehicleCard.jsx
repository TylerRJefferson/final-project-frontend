import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardBody, CardFooter, Grommet } from "grommet";
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
  const navigate = useNavigate();
  return (
    <Grommet theme={theme}>
      <ReactCardFlip isFlipped={flip}
        flipDirection="horizontal">
        <Box margin="10px 0px 0px 0px">
          <Card pad="medium" background="light-4">
            <div style={{
              height: 250,
              width: 350,
              backgroundImage: `url(${thisVehicle.filebase64})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            />
            <CardBody pad="small">
              <h2>{thisVehicle.make} {thisVehicle.model}</h2>
              <h3>{thisVehicle.year}</h3>
              <p>{thisVehicle.oil_specs}</p>
            </CardBody>
            <CardFooter>
              <Button secondary size="small" label="Log Maintenance"
                onClick={() => navigate("/logs")} />
              <Button secondary size="small" label="Show Logs"
                onClick={() => setFlip(!flip)} />
            </CardFooter>
          </Card>
        </Box>
        
        <Box margin="10px 0px 10px 0px">
          <Card pad="medium" background="light-4">
            <CardBody pad="small">
              <h2>Logs go here...</h2>
              <p>Examples...</p>
              {/* {thisVehicle.maint_type} */}
              <p>Oil Changed</p>
              {/* {thisVehicle.maint_date} - {thisVehicle.maint_miles} */}
              <p>10/22/2022 - 90,782 miles</p>
              <p>Transmission Fluid Changed</p>
              <p>10/22/2022 - 90,782 miles</p>
              <p>Brake Pads and Rotors Changed</p>
              <p>05/17/2022 - 81,493 miles</p>
            </CardBody>
            <CardFooter>
              <Button secondary size="small" label="Log Maintenance"
                onClick={() => navigate("/logs")} />
              <Button secondary size="small" label="Show Vehicle"
                onClick={() => setFlip(!flip)} />
            </CardFooter>
          </Card>
        </Box>
      </ReactCardFlip>
    </Grommet>
  )
}