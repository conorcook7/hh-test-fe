import { useRouter } from "next/router";
import {
  Button,
  styled,
  Grid,
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material/";

const drawerWidth = 240;

const navColors = [
  { text: "Red", value: "FF0000" },
  { text: "Orange", value: "FFA500" },
  { text: "Yellow", value: "FFFF00" },
  { text: "Green", value: "008000" },
  { text: "Blue", value: "0000FF" },
  { text: "Purple", value: "800080" },
  { text: "Brown", value: "A52A2A" },
  { text: "Gray", value: "808080" },
];

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
  paddingBottom: ".25rem",
}));
const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.custom.darkGray,
  textAlign: "left",
  padding: "0",
  width: "100%",
  paddingLeft: ".25rem",
  textDecoration: "none",
}));

const Sidebar = ({ colors }) => {
  const router = useRouter();

  const handleRandom = () => {
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    router.push(`/color/${randColor.colorValue}`);
  };

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
          <RandomButton variant="outlined" onClick={() => handleRandom()}>
            Random Color
          </RandomButton>
        </ButtonGrid>
        <List>
          {navColors.map((color) => (
            <ListItem button key={color.text}>
              <CustomLink href={`/color/${color.value}`}>
                <ListItemText primary={color.text} />
              </CustomLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
