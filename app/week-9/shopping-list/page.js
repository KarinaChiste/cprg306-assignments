"use client";
import { useState } from "react";
import {ItemList} from "./item-list.js"
import { NewItem } from "./new-item.js"
import itemsData from "./items.json"
import { MealIdeas } from "./meal-ideas.js";


export default function Page(){
  
  
  
    let itemArray = itemsData;
    const [items, setItems] = useState(itemArray);
    const [selectedItemName, setSelectedItemName] = useState(null);
    let newItems = items;
  
  

  const handleItemSelect = (data) =>{
    // alert(typeof item.name)
    // if(typeof item.name === "string"){
      let newName = new String(data.name);
      
      // alert("This works");
      // alert(newName);
      if (newName.includes(",") ){
        // alert("In if statement")
        let nameSplit = newName.split(",");
        newName = nameSplit[0];
      }
    
      newName = newName.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, ' ');
      // newName = newName.replace(/\W/g, '');
      // alert(newName);
      setSelectedItemName(newName);
      
    }
    
  // }

  const handleAddItem = (data) => {
    data.id = Math.random().toString(16).slice(2) ; // got this from stack overflow
    let newItems = [...items, data];
    
    
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
      <div className="flex"> 
        <div>
          <h1 className="font-bold text-3xl text-center p-2">Shopping List</h1>
          <NewItem onAddItem = {handleAddItem}/>
        < ItemList items = {items} onItemSelect={handleItemSelect}/>
        </div>
        
        <div >
          <MealIdeas ingredient={selectedItemName}/>
        </div>
      </div>
      
           
    </main>
  )
}