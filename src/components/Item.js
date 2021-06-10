import React, { useState }from "react";





function Item({ name, category }) {

//state variable that change the classname 
  const [isInCart, setIsInCart] = useState(false) 

//add to cart function
  const addToCartBtnHandler = (e) => {
    setIsInCart(!isInCart)
  }


  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={e=>{addToCartBtnHandler(e)}} 
              className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
