import { useEffect, useState } from "react";
import { Pagination, Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import ColorCard from "./ColorCard";

const CustomPagination = styled(Pagination)({
  marginTop: "4rem",
  justifyContent: "center",
  "& .MuiPagination-ul": {
    justifyContent: "center",
  },
});
const CustomBox = styled(Box)({
  marginTop: "4rem",
});

const ListView = ({ colors }) => {
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  const itemsPerPage = 12;

  const handleChangePaginationPage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setNoOfPages(Math.ceil(colors?.length / itemsPerPage));
  }, [colors]);

  return (
    <CustomBox>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {colors
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((color, i, arr) => {
            if (arr.length - 1 === i) {
              // last one
              return (
                <Grid item key={color?.id}>
                  <ColorCard color={color?.colorValue} />
                </Grid>
              );
            } else {
              // not last one
              return (
                <Grid item key={color?.id}>
                  <ColorCard color={color?.colorValue} />
                </Grid>
              );
            }
          })}
      </Grid>
      <CustomPagination
        hidePrevButton
        hideNextButton
        count={noOfPages}
        page={page}
        onChange={handleChangePaginationPage}
        defaultPage={1}
        siblingCount={2}
      />
    </CustomBox>
  );
};

export default ListView;
