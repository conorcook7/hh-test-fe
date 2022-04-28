import { useEffect, useState } from "react";
import { styled, Grid, Button } from "@mui/material/";
import ColorCard from "./ColorCard";
import LargeColorCard from "./LargeColorCard";
import axios from "axios";
import { NoUnderlineLink } from "./sharedComponents";

const ClearButton = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.darkGray,
  borderRadius: ".5rem",
  borderColor: theme.palette.custom.darkGray,
  backgroundColor: theme.palette.common.white,
  width: "100%",
  paddingTop: ".5rem",
  paddingBottom: ".25rem",
  fontWeight: "bold",
  textTransform: "none",
  fontSize: "1rem",
}));

const CustomLargeColorGrid = styled(Grid)({
  width: "100%",
  marginTop: "8rem",
});
const CustomItem = styled(Grid)({
  display: "flex",
  justifyContent: "center",
});
const CustomSmallColorGrid = styled(Grid)({
  marginTop: "1rem",
});
const ButtonGrid = styled(Grid)({
  width: "18%",
});

const DetailView = ({ color }) => {
  const [auxColors, setAuxColors] = useState([]);

  const insertMainColor = (arr, index, ...newColors) => [
    ...arr.slice(0, index),
    ...newColors,
    ...arr.slice(index),
  ];

  useEffect(() => {
    let isSubscribed = true;
    if (!color) return;
    (async () => {
      let newColors = null;
      axios
        .get(
          `https://www.thecolorapi.com/scheme?hex=${color}&mode=monochrome&count=4`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          newColors = response.data.colors.map((color) => {
            return color.hex.clean;
          });
          if (isSubscribed) {
            setAuxColors(insertMainColor(newColors, 2, color));
          }
        });
    })();

    return () => {
      isSubscribed = false;
      setAuxColors([]);
    };
  }, [color]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <CustomLargeColorGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CustomItem item xs={12}>
            <LargeColorCard color={color} />
          </CustomItem>
        </CustomLargeColorGrid>

        <CustomSmallColorGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {auxColors.map((auxColor) => (
            <Grid item key={auxColor}>
              <ColorCard color={auxColor} />
            </Grid>
          ))}
        </CustomSmallColorGrid>
        <CustomSmallColorGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <ButtonGrid item>
            <NoUnderlineLink href="/">
              <ClearButton variant="outlined">Clear</ClearButton>
            </NoUnderlineLink>
          </ButtonGrid>
        </CustomSmallColorGrid>
      </Grid>
    </>
  );
};

export default DetailView;
