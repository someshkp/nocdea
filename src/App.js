import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./page/Home";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        {token && <Route  path="/home" exact element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;
