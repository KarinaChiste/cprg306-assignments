"use client";
import { useState } from "react";
import {Item} from "./item.js";
import itemArray from "./items.json";

 export function ItemList(){
  const [sortBy, setSortBy] = useState("name");
  const [arrayItems, setArrayItems] = useState(itemArray.sort((a,b) =>(a.name.localeCompare(b.name))));
  let items = itemArray;

  function sortByName(){
    // alert("test");
    setSortBy("name");
    let newItems = [...items];
    newItems = newItems.sort((a,b) =>(a.name.localeCompare(b.name)));
   setArrayItems(newItems);
    // alert(newItems[0].name);
    // alert(items[1].name);
 
    
  }

  function sortByCategory(){
    // alert("test");
    setSortBy("category");
    let newItems = [...items];
    newItems = newItems.sort((a,b) =>(a.category.localeCompare(b.category)));
   setArrayItems(newItems);
    // alert(newItems[0].name);
    // alert(items[1].name);
 
    
  }
   
  
  return(
    <main>
      <button onClick={sortByName}
        type="button"
        className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-gray-100">
          Name
      </button>
      <button onClick={sortByCategory}
        type="button"
        className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-gray-100">
          Category
      </button>
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