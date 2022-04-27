import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getColors } from "../utility/fetchColors";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ListView from "../components/ListView";

export default function Home({ colors }) {
  console.log("colors", colors);
  return (
    <div className={styles.container}>
      <Head>
        <title>Color Picker</title>
        <meta name="description" content="Select your color!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar colors={colors} />
          <Sidebar />
          <ListView colors={colors} />
        </Box>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const results = await getColors();

  return {
    props: {
      colors: results,
    },
  };
}
