import "./App.css";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/Login";
import { Register } from "./component/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
