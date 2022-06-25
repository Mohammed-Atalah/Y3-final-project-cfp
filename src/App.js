import "./App.css";
import Home from "./pages/Home";
import "./styles/NavBar.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Scholarships from "./pages/Scholarships";
import Universities from "./pages/ Universities";
import Tests from "./pages/Tests";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import STEM from "./pages/STEM";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/STEM" element={<STEM />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>

    // <div className="App">
    //   <NavBar />
    //   {/* <Home /> */}
    //   {/* <SignUp /> */}
    //   {/* <Scholarships /> */}
    //   {/* <Universities /> */}
    //   {/* <Tests /> */}
    // </div>
  );
}

export default App;
