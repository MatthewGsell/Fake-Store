import Itemcss from "./Item.module.css";


function Item({ title, image, price, handlechange, handleclick }) {

    return <div className={Itemcss.item}>
    <div>{title}</div>
    <div className={Itemcss.imagecontainer}>
      <img src={image} className={Itemcss.image}></img>
    </div>
    <div className={Itemcss.price}>{price}</div>
    <input type="number" className={Itemcss.input} defaultValue="1" min="1" onChange={handlechange}/>
    <button className={Itemcss.bagbutton} onClick={handleclick}>Add to bag!</button>
  </div>

} 


export default Item