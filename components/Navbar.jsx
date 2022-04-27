import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Logo from "../assets/logo-symbol.svg";

const CustomLogo = styled(Logo)({
  width: 40,
  height: 40,
  verticalAlign: "middle",
});

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.custom.darkGray,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
  },
}));

const Navbar = ({ colors }) => {
  return (
    <CustomAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <CustomLogo />
        </Typography>
        <Search>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
