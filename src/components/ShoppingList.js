import React, { useState }from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  //use state var to change items (the array of object)
  const [selectedCategory,setselectedCategory] = useState(items)

  //handler function
  const selectFilter = (e) =>{
    const matchingItems = items.filter((item) => 
      item.category === e.target.value
    )
    setselectedCategory(matchingItems)

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"
                onChange={e=>{selectFilter(e)}}
                >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
