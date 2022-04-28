import {
  styled,
  Link,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
} from "@mui/material/";
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
  // USE COLORS FOR SEARCH BAR

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
          <Link href="/">
            <CustomLogo />
          </Link>
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
