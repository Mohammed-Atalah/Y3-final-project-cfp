import "./App.css";
import Home from "./pages/Home";
import "./styles/NavBar.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Scholarships from "./pages/Scholarships";
import Universities from "./pages/ Universities";
import Tests from "./pages/Tests";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import STEM from "./pages/STEM";
import React, { useEffect } from "react";
import Favs from "./pages/Favs";

function App() {
  const [SignedIn, setSignIn] = React.useState(false);
  useEffect(() => {
    console.log(SignedIn);
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar SignedIn={SignedIn} setSignIn={setSignIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/STEM" element={<STEM />} />
          <Route path="/favorites" element={<Favs />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/SignIn"
            element={<SignIn setSignIn={setSignIn} SignedIn={SignedIn} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
