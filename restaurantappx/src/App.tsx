import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./layout/component";
import { userTokenSelector } from "./redux/user/selectors";
import Error404 from "./views/error404/component";
import Home from "./views/home/component";
import Locations from "./views/locations/component";
import Login from "./views/login/component";
import Products from "./views/products/component";
import ViewDetails from "./views/viewdetails/component";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenUser = useSelector(userTokenSelector);

  useEffect(() => {
    if (
      (tokenUser && tokenUser !== "" && location.pathname === "/login") ||
      location.pathname === "/Login/"
    ) {
      navigate("/", { replace: true });
    }
  }, [tokenUser, location, navigate]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/locations/edit/:id/:name/:description/:phone_number/:schedule_open/:schedule_close" element={<ViewDetails />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
