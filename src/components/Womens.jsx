import Womenscss from "./Womens.module.css";
import Item from "./Item";

function Womens({ womensitems, cartArray, setCartArray, womens0Count,  setWomens0Count, womens1Count,  setWomens1Count, womens2Count,  setWomens2Count, womens3Count,  setWomens3Count }) {
  function incrementwomens0 (e) {
    const value = parseFloat(e.target.value)
    setWomens0Count(value)
  } function incrementwomens1 (e) {
    const value = parseFloat(e.target.value)
    setWomens1Count(value)
  } function incrementwomens2 (e) {
    const value = parseFloat(e.target.value)
    setWomens2Count(value)
  } function incrementwomens3 (e) {
    const value = parseFloat(e.target.value)
    setWomens3Count(value)
  }
  
  function pushwomens0 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = womens0Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)

  }
  function pushwomens1 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = womens1Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)

  }  function pushwomens2 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = womens2Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)

  }  function pushwomens3 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = womens3Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)}



  return (  <div className={Womenscss.itemscontainer}>
    <Item title={womensitems[0]["title"]} image={womensitems[0]["image"]} price={womensitems[0]["price"]} handlechange={incrementwomens0} handleclick={pushwomens0}/>
    <Item title={womensitems[1]["title"]} image={womensitems[1]["image"]} price={womensitems[1]["price"]} handlechange={incrementwomens1} handleclick={pushwomens1}/>
    <Item title={womensitems[2]["title"]} image={womensitems[2]["image"]} price={womensitems[2]["price"]} handlechange={incrementwomens2} handleclick={pushwomens2}/>
    <Item title={womensitems[3]["title"]} image={womensitems[3]["image"]} price={womensitems[3]["price"]} handlechange={incrementwomens3} handleclick={pushwomens3}/>
 
  </div>);
}

export default Womens;
