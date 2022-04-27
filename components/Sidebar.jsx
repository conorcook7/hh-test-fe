import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Button, styled, Grid } from "@mui/material/";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const ButtonGrid = styled(Grid)({
  marginTop: "4rem",
});
const RandomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.darkGray,
  borderRadius: ".5rem",
  borderColor: theme.palette.custom.darkGray,
  backgroundColor: theme.palette.common.white,
  width: "80%",
  paddingTop: ".5rem",
  paddingBottom: ".5rem",
}));
const ListButton = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.darkGray,
  textAlign: "left",
  padding: "0",
  width: "100%",
  paddingLeft: ".25rem",
}));

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#d6d8d8",
          color: "#373c3c",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <ButtonGrid container justifyContent="center">
          <RandomButton variant="outlined">Random Color</RandomButton>
        </ButtonGrid>
        <List>
          {[
            { text: "Red", value: "#FF0000" },
            { text: "Orange", value: "#FFA500" },
            { text: "Yellow", value: "#FFFF00" },
            { text: "Green", value: "#008000" },
            { text: "Blue", value: "#0000FF" },
            { text: "Purple", value: "#800080" },
            { text: "Brown", value: "#A52A2A" },
            { text: "Gray", value: "#808080" },
          ].map((color, index) => (
            <ListItem button key={color.text}>
              <ListButton variant="text">
                <ListItemText primary={color.text} />
              </ListButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
