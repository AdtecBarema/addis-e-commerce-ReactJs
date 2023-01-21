import "./App.css";
import Home from "./components/shopeHome/Home";
import Header from "./components/shopeHome/Header";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/auth/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/header" element={<Header/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>          
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
