"use client";
import { useMemo, useState } from "react";
import {ItemList} from "./item-list.js"
import { NewItem } from "./new-item.js"
import itemsData from "./items.json"
import {sortBy} from "./item-list.js"
import {Item} from "./item.js"


export default function Page(){
  
  
  
    let itemArray = itemsData;
    const [items, setItems] = useState(itemArray);
    let newItems = items;
  
 
  const handleAddItem = (data) => {
    data.id = Math.random().toString(16).slice(2) ; // got this from stack overflow
    let newItems = [...items, data];
    // alert(newItems[newItems.length-1].name);
    // alert(ItemList.getSortBy)
    
    setItems(newItems);
   
    
    // alert("Please work");
  }

  
  function sortNewItem(sortBy) 
  {
    if(sortBy == "name")
      {
        newItems = newItems.sort((a,b) =>(a.name.localeCompare(b.name)))
      }
      
      if(sortBy == "category")
      {
        newItems = newItems.sort((a,b) =>(a.category.localeCompare(b.category)))
      }
      
  }
  


  return(
    <main>
      <h1 className="font-bold text-3xl text-center p-2">Shopping List</h1>
      <NewItem onAddItem = {handleAddItem}/>
      <ItemList items = {items}/>
           
    </main>
  )
}