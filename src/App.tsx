import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import style from "./App.module.css";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MyMenu from "./Components/Menu/Menu";
import Appbar from "./Components/Appbar/Appbar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Signup/Signup";
import Components from "./Pages/Components/Components";

function Layout() {
  return (
    <div className={style.conteiner}>
      <Appbar />
      <div className={style.menu_outlet}>
        <MyMenu />
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
