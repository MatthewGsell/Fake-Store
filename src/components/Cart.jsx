import { useState, useEffect } from "react";
import Cartcss from "./Cart.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";


function Cart({ cartArray, deletefromcart }) {
let  renderedCartArray = []
let carttotal = 0


console.log(cartArray)

  cartArray.forEach(element => {
    const iteminbag = [<div className={Cartcss.item}><div className={Cartcss.picture}><img src={element[1]}></img></div><div className={Cartcss.title}>{element[0]}</div><div className={Cartcss.quantity}>{element[2]}</div><div className={Cartcss.totalprice}>{element[3]}</div><button className={Cartcss.deletebutton} id={element[4]} onClick={deletefromcart}><FontAwesomeIcon icon={faTrashCan}/></button></div>]
    renderedCartArray = [...renderedCartArray, iteminbag]
  
  });

cartArray.forEach((item) => {
  carttotal = carttotal + item[3]

})


  return  (<div className={Cartcss.maincontainer}>{renderedCartArray}
  <div className={Cartcss.carttotal}>Total: {carttotal}</div><button className={Cartcss.checkoutbutton}>Checkout!</button></div>)
}

export default Cart