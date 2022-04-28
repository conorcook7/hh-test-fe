import { CssBaseline, Box } from "@mui/material/";
import Layout from "../../components/Layout";
import DetailView from "../../components/DetailView";
import { getColors } from "../api/fetchColors";
import { useRouter } from "next/router";

const Color = ({ colors }) => {
  const router = useRouter();
  const color = router?.query?.id;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Layout colors={colors}>
        <DetailView color={`${color}`} />
      </Layout>
    </Box>
  );
};

export async function getServerSideProps() {
  const results = await getColors();

  return {
    props: {
      colors: results,
    },
  };
}

export default Color;
