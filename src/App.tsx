import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MyMenu from "./Components/Menu/Menu";
import Appbar from "./Components/Appbar/Appbar";
import Home from "./Pages/Home/Home";

function Layout() {
  return (
    <>
      <Appbar />
      <MyMenu />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
