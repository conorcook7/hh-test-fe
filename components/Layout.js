import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ colors, children }) => {
  return (
    <>
      <Navbar colors={colors} />
      <Sidebar colors={colors} />
      {children}
    </>
  );
};

export default Layout;
