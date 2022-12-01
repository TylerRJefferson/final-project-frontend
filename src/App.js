import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Grommet } from "grommet";
import AppBar from "./components/AppBar"
import AddVehicleForm from "./components/AddVehicleForm"
import VehicleList from "./components/VehicleList";

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

function App() {
  return (
    <BrowserRouter>
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar />
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            <Routes>
              <Route path="/add" element={<AddVehicleForm />} />
              <Route path="/" element={<VehicleList />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Grommet>
    </BrowserRouter>
  );
}

export default App;
