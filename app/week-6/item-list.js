"use client";
import { useState } from "react";
import {Item} from "./item.js";
import itemArray from "./items.json";

 export function ItemList(){
  const [sortBy, setSortBy] = useState("name");
  const [arrayItems, setArrayItems] = useState(itemArray.sort((a,b) =>(a.name.localeCompare(b.name))));
  const [disabledCategory, setDisabledCategory] = useState(false);
  const [disabledName, setDisabledName] = useState(true);
  let items = itemArray;

  function sortByName(){
    // alert("test");
    setSortBy("name");
    setDisabledCategory(false);
    setDisabledName(true);
    let newItems = [...items];
    newItems = newItems.sort((a,b) =>(a.name.localeCompare(b.name)));
   setArrayItems(newItems);
    // alert(newItems[0].name);
    // alert(items[1].name);
 
    
  }

  function sortByCategory(){
    // alert("test");
    setSortBy("category");
    setDisabledCategory(true);
    setDisabledName(false);
    let newItems = [...items];
    newItems = newItems.sort((a,b) =>(a.category.localeCompare(b.category)));
   setArrayItems(newItems);
    // alert(newItems[0].name);
    // alert(items[1].name);
 
    
  }
   
  
  return(
    <main>
      <div className="justify-self-center">
        <p className="text-sm justify-self-center">Sort By: </p>
      <button onClick={sortByName}
        type="button"
        className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-gray-100 disabled:bg-blue-600 disabled:text-white"
        disabled={disabledName}>
          Name
      </button>
      <button onClick={sortByCategory}
        type="button"
        className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-gray-100 disabled:bg-blue-600 disabled:text-white"
        disabled = {disabledCategory}>
          Category
      </button>
      </div>
      
      <ul>
      {arrayItems.map((item) => (
       
          <li key={item.id}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </main>

  )
}