import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
