import {
  Paper,
  styled,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material/";
import { CustomTypography } from "./sharedComponents";

const CustomCardContent = styled(CardContent)({
  padding: ".25rem 0 .25rem 1rem",
});
const CustomCard = styled(Card)({
  width: "150px",
  maxWidth: 345,
});

const ColorCard = ({ color }) => {
  const CustomPaper = styled(Paper)({
    width: "150px",
    height: "150px",
    borderRadius: ".5rem .5rem 0 0",
    background: `#${color}`,
  });
  return (
    <CustomCard>
      <CardActionArea>
        <CustomPaper />
        <CustomCardContent>
          <CustomTypography variant="h6">#{color}</CustomTypography>
        </CustomCardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default ColorCard;
