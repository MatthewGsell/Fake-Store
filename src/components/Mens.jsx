import Menscss from "./Mens.module.css";
import { useState, useEffect } from "react";
import Item from "./Item";

function Mens({ mensitems,  cartArray, setCartArray, mens0Count,  setMens0Count, mens1Count,  setMens1Count, mens2Count,  setMens2Count, mens3Count,  setMens3Count }) {
  function incrementmens0 (e) {
    const value = parseFloat(e.target.value)
    setMens0Count(value)
  } function incrementmens1 (e) {
    const value = parseFloat(e.target.value)
    setMens1Count(value)
  } function incrementmens2 (e) {
    const value = parseFloat(e.target.value)
    setMens2Count(value)
  } function incrementmens3 (e) {
    const value = parseFloat(e.target.value)
    setMens3Count(value)
  }
  





  function pushmens0 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = mens0Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)

  }
  function pushmens1 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = mens1Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)

  }  function pushmens2 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = mens2Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)

  }  function pushmens3 (e) {
    const newkey = crypto.randomUUID()
    const itemcount = mens3Count
    const valueofitem = parseFloat(e.target.previousSibling.previousSibling.innerText)
    const itemtitle = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    const itemimage = e.target.previousSibling.previousSibling.previousSibling.firstChild.src
    const totalvalue = itemcount * valueofitem
    const itemarray = [itemtitle, itemimage, itemcount, totalvalue, newkey]
    setCartArray([...cartArray, itemarray])
    console.log(cartArray)

  }
  return (
    <div className={Menscss.itemscontainer}>
      <Item title={mensitems[0]["title"]} image={mensitems[0]["image"]} price={mensitems[0]["price"]} handlechange={incrementmens0} handleclick={pushmens0}/>
      <Item title={mensitems[1]["title"]} image={mensitems[1]["image"]} price={mensitems[1]["price"]} handlechange={incrementmens1} handleclick={pushmens1}/>
      <Item title={mensitems[2]["title"]} image={mensitems[2]["image"]} price={mensitems[2]["price"]} handlechange={incrementmens2} handleclick={pushmens2}/>
      <Item title={mensitems[3]["title"]} image={mensitems[3]["image"]} price={mensitems[3]["price"]} handlechange={incrementmens3} handleclick={pushmens3}/>
    </div>
  );
}

export default Mens;
