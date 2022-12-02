import { useNavigate } from "react-router-dom";
import { Box, Heading, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

const MenuBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "medium", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export default function AppBar() {
  const navigate = useNavigate()
  return (
    <MenuBar>
      <Heading level="2" margin="none" color="black">Pocket Mechanic</Heading>
      <Menu
        icon={<MenuIcon color="black" />}
        dropBackground="light-2"
        items={[
          { label: 'Add New Vehicle', onClick: () => navigate('/add') },
          { label: 'My Garage', onClick: () => navigate('/') },
          // { label: 'Log Out', onClick: () => {} },
        ]}
      />
    </MenuBar>
  )
}