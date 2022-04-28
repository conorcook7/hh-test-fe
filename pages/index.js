import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getColors } from "./api/fetchColors";
import { CssBaseline, Box } from "@mui/material/";
import ListView from "../components/ListView";
import Layout from "../components/Layout";

const Home = ({ colors }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Color Picker</title>
        <meta name="description" content="Select your color!" />
        <link href="../assets/logo-symbol.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Layout colors={colors}>
            <ListView colors={colors} />
          </Layout>
        </Box>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const results = await getColors();

  return {
    props: {
      colors: results,
    },
  };
}

export default Home;
