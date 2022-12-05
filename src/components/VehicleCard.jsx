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
        <Box margin="10px 0px 10px 0px">
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
                onClick={() => navigate(`/logs/${thisVehicle._id}`)} />
              <Button secondary size="small" label="Show Logs"
                onClick={() => setFlip(!flip)} />
            </CardFooter>
          </Card>
        </Box>
        
        <Box margin="10px 0px 10px 0px">
          <Card pad="medium" background="light-4">
            <CardBody pad="small">
              {thisVehicle.logs.map((log) => {
                return (
                  <>
                  <h3>{log.maint_type}</h3>
                  <p>{(new Date(log.maint_date)).toDateString()} - {log.maint_miles}</p>
                  </>
                  )
              })}
            </CardBody>
            <CardFooter>
              <Button secondary size="small" label="Log Maintenance"
                onClick={() => navigate(`/logs/${thisVehicle._id}`)} />
              <Button secondary size="small" label="Show Vehicle"
                onClick={() => setFlip(!flip)} />
            </CardFooter>
          </Card>
        </Box>
      </ReactCardFlip>
    </Grommet>
  )
}