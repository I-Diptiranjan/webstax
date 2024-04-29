import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import { PageNotFound } from "./screens";
import TrainersDashoboard from "./screens/dashboard/TrainersDashboard";
import TrainersBaseLayout from "./layout/TrainersBaseLayout";
import OrgDashoboard from "./screens/dashboard/OrgDashboard";
import OrgBaseLayout from "./layout/OrgBaseLayout";
import TABaseLayout from "./layout/TABaseLayout";
import TADashoboard from "./screens/dashboard/TADashboard";
import Calender from "./screens/TrainerDashboard/Calender";
import HeroPage from "./screens/HomePage/HeroPage";
import { FaSun, FaMoon } from "react-icons/fa";
import UserSignUp from "./screens/Registration Forms/Signup/UserSignUp";
import { Footer, Navbar } from "./components/HeroPageComponents";
import SignUpOptions from "./screens/Registration Forms/Signup/SignUpOptions";
import TASignup from "./screens/Registration Forms/Signup/TASignup";
import OrgSIgnup from "./screens/Registration Forms/Signup/OrgSIgnup";
import TrainerSignup from "./screens/Registration Forms/Signup/TrainerSignup";
import OrgLogin from "./screens/Registration Forms/Login/OrgLogin";
import UserLogin from "./screens/Registration Forms/Login/UserLogin";
import TALogin from "./screens/Registration Forms/Login/TALogin";
import TrainerLogin from "./screens/Registration Forms/Login/TrainerLogin";
import LoginOptions from "./screens/Registration Forms/Login/LoginOptions";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={` scroll-smooth dark:bg-black `}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroPage />} />

          {/* Sign Up Pages */}

          <Route path="/signup" element={<SignUpOptions />} />
          <Route path="/signup/user" element={<UserSignUp />} />
          <Route path="/signup/ta" element={<TASignup />} />
          <Route path="/signup/organisation" element={<OrgSIgnup />} />
          <Route path="/signup/trainer" element={<TrainerSignup />} />

          {/* Lgin Pages */}

          <Route path="/login" element={<LoginOptions />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/login/ta" element={<TALogin />} />
          <Route path="/login/organisation" element={<OrgLogin />} />
          <Route path="/login/trainer" element={<TrainerLogin />} />

          <Route
            element={<TrainersBaseLayout />}
            path="/TrainerDashboard/:trainerId">
            <Route index element={<TrainersDashoboard />} />
            <Route path="calender" element={<Calender />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route element={<OrgBaseLayout />} path="/OrgDashboard/:orgId">
            <Route index element={<OrgDashoboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route element={<TABaseLayout />} path="/TADashboard/:taId">
            <Route index element={<TADashoboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <button
          type="button"
          className="theme-toggle-btn dark:bg-red-500"
          onClick={toggleTheme}>
          {theme === LIGHT_THEME ? <FaMoon /> : <FaSun color="white" />}
        </button>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
