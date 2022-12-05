import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Grommet, Main } from "grommet";
import AppBar from "./components/AppBar";
import AddVehicleForm from "./components/AddVehicleForm";
import VehicleList from "./components/VehicleList";
import MaintenanceLog from "./components/MaintenanceLog";
import "./assets/styles.css"

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
      <Main>
        <AppBar />
        <Box className="background" direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="between" >
            <Routes>
              <Route path="/" element={<VehicleList />} />
              <Route path="/add" element={<AddVehicleForm />} />
              <Route path="/logs" element={<MaintenanceLog/>} />
            </Routes>
          </Box>
        </Box>
      </Main>
    </Grommet>
    </BrowserRouter>
  );
}

export default App;
