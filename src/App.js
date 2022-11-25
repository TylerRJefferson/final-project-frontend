// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Grommet, Heading, Menu } from "grommet";
import AddVehicleForm from "./components/AddVehicleForm"

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

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">Pocket Mechanic</Heading>
          <Menu
            label="Menu" 
            dropBackground="light-2"
              items={[
                { label: 'Add New Vehicle', onClick: () => {} },
                { label: 'My Garage', onClick: () => {} },
                { label: 'Log Out', onClick: () => {} },
              ]}
          />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            <AddVehicleForm />
          </Box>     
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
