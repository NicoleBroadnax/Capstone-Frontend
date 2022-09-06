import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Search from "../Search/Search";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header />}
      <div className="container-fluid" style={{ padding: 0 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
