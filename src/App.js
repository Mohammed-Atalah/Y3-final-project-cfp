import "./App.css";
import Home from "./pages/Home";
import "./styles/NavBar.css";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <SignUp />
    </div>
  );
}

export default App;
