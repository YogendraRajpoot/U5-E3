import "./App.css";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { ProductPage } from "./component/ProductPage";
import { SingleProductPage } from "./component/SingleProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/products/:userid" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
