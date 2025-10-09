"use client";
import { useState } from "react";

export function NewItem()
{
  const [quantity, setQuantity] = useState(1);
  const [disabledIncrement, setDisabledIncrement] = useState(false);
  const [disabledDecrement, setDisabledDecrement] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  function handleSubmit(event)
  {
    event.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category
    }
    console.log(item);
    alert(`Item: ${item.name} \nQuantity: ${item.quantity} \nCategory: ${item.category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
    setDisabledDecrement(true)
    
  }
  
  function increment()
  {
    if(quantity <=18){
      setQuantity(quantity +1);
      setDisabledIncrement(false);
    }
    if(quantity == 19){
      setDisabledIncrement(true);
      setQuantity(quantity +1);
    }
    if(quantity >=1){
      setDisabledDecrement(false);
    }

  }
    
  
  function decrement()
  {
    if(quantity >1){
      setQuantity(quantity -1);
      setDisabledDecrement(false);
    }
    if(quantity <=20){
      setDisabledIncrement(false);
    }
    if(quantity==2){
      setDisabledDecrement(true);
      setQuantity(quantity-1);
    }
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  return(
    <main>
      <h2 className="font-bold text-2xl text-center">Week 5 - New Item</h2>
      <div className="border-1 mx-30 w-100 justify-self-center rounded-2xl">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleNameChange} value={name}  required/>
        <div>
          <p className="text-center">Current:<span className="font-bold text-2xl">{quantity}</span></p>
          <div className="justify-self-center">
            <button onClick={increment}
            disabled={disabledIncrement}
            type="button"
            className="border-1 my-1 py-3 px-5 mx-3 bg-blue-500 text-white rounded-2xl disabled:bg-blue-300">
              +
            </button>
            
            <button onClick={decrement}
            disabled={disabledDecrement}
            type="button"
            className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-gray-100 disabled:bg-gray-300">
              -
            </button>
          </div>
        </div>
        <select onChange={handleCategoryChange} value={category}>
          <option value={"produce"}>Produce</option>
          <option value={"dairy"}>Dairy</option>
          <option value={"bakery"}>Bakery</option>
          <option value={"meat"}>Meat</option>
          <option value={"frozen foods"}>Frozen Foods</option>
          <option value={"canned goods"}>Canned Goods</option>
          <option value={"dry goods"}>Dry Goods</option>
          <option value={"beverages"}>Beverages</option>
          <option value={"snacks"}>Snacks</option>
          <option value={"household"}>Household</option>
          <option value={"other"}>Other</option>
        </select>
        <button type="submit">Submit</button>
        </form>
        
        
      </div>
    </main>
  )
}