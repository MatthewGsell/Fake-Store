import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Store from "./components/Store";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Mens from "./components/Mens";
import Womens from "./components/Womens";

function App() {
  const [mensClothing, setMensClothing] = useState(null);
  const [womensClothing, setWomensClothing] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      const newmen = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      ).then((res) => res.json());

      const newwomen = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      ).then((res) => res.json());
      if (mensClothing === null) {
        setMensClothing(newmen);
      }
      if (womensClothing === null) {
        setWomensClothing(newwomen);
      }
    }
    fetchdata();
    console.log(mensClothing);
    console.log(womensClothing);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="store" Component={Store}>
          <Route
            path="womens"
            element={<Womens womensitems={womensClothing} />}
          ></Route>
          <Route
            path="mens"
            element={<Mens mensitems={mensClothing} />}
          ></Route>
          <Route path="cart" Component={Cart}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
