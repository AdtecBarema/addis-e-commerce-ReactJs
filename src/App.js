import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/checkout" element={ <Header  />  }></Route>
          <Route  path="/checkout" element={<Checkout />}></Route>

          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
