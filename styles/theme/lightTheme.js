import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    custom: {
      darkGray: "#353b3b",
    },
  },
  typography: {
    fontFamily: [
      "Source Serif Pro",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default lightTheme;
