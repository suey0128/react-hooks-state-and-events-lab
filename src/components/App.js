import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState(false)

  const btnHandler = (e) => {
    setIsDark(!isDark)
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log('items:',items);

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={e=>{btnHandler(e)}}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
