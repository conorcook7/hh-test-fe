import {
  Paper,
  styled,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material/";
import { CustomTypography } from "./sharedComponents";

const CustomCardContent = styled(CardContent)({
  padding: "1.5rem 0 1.5rem 3rem",
});

const CustomCard = styled(Card)({
  width: "95%",
});

const ColorCard = ({ color }) => {
  const CustomPaper = styled(Paper)({
    width: "100%",
    height: "900px",
    maxHeight: "38vh",
    borderRadius: ".5rem .5rem 0 0",
    background: `#${color}`,
  });
  return (
    <CustomCard>
      <CardActionArea>
        <CustomPaper />
        <CustomCardContent>
          <CustomTypography variant="h4">#{color}</CustomTypography>
        </CustomCardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default ColorCard;
