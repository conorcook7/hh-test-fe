import { Typography, Link, styled } from "@mui/material";

export const CustomTypography = styled(Typography)({
  textTransform: "lowercase",
  fontWeight: 400,
});

export const NoUnderlineLink = styled(Link)({
  textDecoration: "none",
});
