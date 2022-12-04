import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Grommet } from "grommet";
import AppBar from "./components/AppBar";
import AddVehicleForm from "./components/AddVehicleForm";
import VehicleList from "./components/VehicleList";
import MaintenanceLog from "./components/MaintenanceLog"

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
          <Box background="url(https://images.unsplash.com/photo-1510414148252-a2c44206f94b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" 
            flex align="center" justify="center">
            <Routes>
              <Route path="/" element={<VehicleList />} />
              <Route path="/add" element={<AddVehicleForm />} />
              <Route path="/logs" element={<MaintenanceLog/>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Grommet>
    </BrowserRouter>
  );
}

export default App;
