"use client";
import { useState } from "react";
export function NewItem()
{
  const [quantity, setQuantity] = useState(1);
  function increment()
  {
    if(quantity <20){
      setQuantity(quantity +1);
    }

  }
    
  
  function decrement()
  {
    if(quantity >1){
      setQuantity(quantity -1);
    }
  }

  return(
    <main>
      <h2>Add New Item</h2>
      <p>Quantity:{quantity}</p>
      <button onClick={increment}>
        Increment
      </button>
      <br/>
      <button onClick={decrement}>
        Decrement
      </button>
    </main>
  )
}