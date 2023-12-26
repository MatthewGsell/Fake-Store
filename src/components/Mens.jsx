import Menscss from "./Mens.module.css";
import { useState, useEffect } from "react";

function Mens({ mensitems }) {
  const a = mensitems[0]["title"];
  console.log(a);
  return (
    <div className={Menscss.itemscontainer}>
      <div className={Menscss.item}>
        <div>{mensitems[0]["title"]}</div>
        <div className={Menscss.imagecontainer}>
          <img src={mensitems[0]["image"]} className={Menscss.image}></img>
        </div>
        <div className={Menscss.price}>{mensitems[0]["price"]}</div>
        <button className={Menscss.bagbutton}>Add to bag!</button>
      </div>
      <div className={Menscss.item}>
        <div>{mensitems[1]["title"]}</div>
        <div className={Menscss.imagecontainer}>
          <img src={mensitems[1]["image"]} className={Menscss.image}></img>
        </div>
        <div className={Menscss.price}>{mensitems[1]["price"]}</div>
        <button className={Menscss.bagbutton}>Add to bag!</button>
      </div>
      <div className={Menscss.item}>
        <div>{mensitems[2]["title"]}</div>
        <div className={Menscss.imagecontainer}>
          <img src={mensitems[2]["image"]} className={Menscss.image}></img>
        </div>
        <div className={Menscss.price}>{mensitems[2]["price"]}</div>
        <button className={Menscss.bagbutton}>Add to bag!</button>
      </div>
      <div className={Menscss.item}>
        <div>{mensitems[3]["title"]}</div>
        <div className={Menscss.imagecontainer}>
          <img src={mensitems[3]["image"]} className={Menscss.image}></img>
        </div>
        <div className={Menscss.price}>{mensitems[3]["price"]}</div>
        <button className={Menscss.bagbutton}>Add to bag!</button>
      </div>
    </div>
  );
}

export default Mens;
