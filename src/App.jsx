import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Store from "./components/Store";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Arrow from "./components/Arrow";

function App() {
  const [mensClothing, setMensClothing] = useState(null);
  const [womensClothing, setWomensClothing] = useState(null);
  const [cartArray, setCartArray] = useState([])
  const [mens0Count, setMens0Count] = useState(1)
  const [mens1Count, setMens1Count] = useState(1)
  const [mens2Count, setMens2Count] = useState(1)
  const [mens3Count, setMens3Count] = useState(1)
  const [womens0Count, setWomens0Count] = useState(1)
  const [womens1Count, setWomens1Count] = useState(1)
  const [womens2Count, setWomens2Count] = useState(1)
  const [womens3Count, setWomens3Count] = useState(1)

  function deletefromcart(e) {
    cartArray.forEach((item, index) => {
      if (e.target.id == item[4]) {
        const newarray = cartArray.toSpliced(index, 1)
        setCartArray(newarray)
      }
    })

  }
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
        <Route path="/store/cart" element={<Cart cartArray={cartArray} deletefromcart={deletefromcart}/>}></Route>
        <Route path="store" Component={Store}>
          <Route path="select" Component={Arrow}></Route>
          <Route
            path="womens"
            element={<Womens womensitems={womensClothing} cartArray={cartArray} setCartArray={setCartArray} womens0Count={womens0Count} setWomens0Count={setWomens0Count} womens1Count={womens1Count} setWomens1Count={setWomens1Count} womens2Count={womens2Count} setWomens2Count={setWomens2Count} womens3Count={womens3Count} setWomens3Count={setWomens3Count}/>}
          ></Route>
          <Route
            path="mens"
            element={<Mens mensitems={mensClothing}  cartArray={cartArray} setCartArray={setCartArray} mens0Count={mens0Count} setMens0Count={setMens0Count} mens1Count={mens1Count} setMens1Count={setMens1Count} mens2Count={mens2Count} setMens2Count={setMens2Count} mens3Count={mens3Count} setMens3Count={setMens3Count}/>}
          ></Route>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
