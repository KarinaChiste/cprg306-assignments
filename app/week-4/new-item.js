"use client";
import { useState } from "react";
export function NewItem()
{
  const [quantity, setQuantity] = useState(1);
  const [disabledIncrement, setDisabledIncrement] = useState(false)
  const [disabledDecrement, setDisabledDecrement] = useState(true)
  
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

  return(
    <main>
      <h2 className="font-bold text-2xl text-center">Add New Item</h2>
      <div className="border-1 mx-30 w-100 justify-self-center rounded-2xl">
        <p className="text-center">Quantity:<span className="font-bold text-2xl">{quantity}</span></p>
        <div className="justify-self-center">
          <button onClick={increment}
          disabled={disabledIncrement}
          className="border-1 my-1 py-3 px-5 mx-3 bg-blue-500 text-white rounded-2xl disabled:bg-blue-300">
            +
          </button>
          
          <button onClick={decrement}
          disabled={disabledDecrement}
          className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-gray-100 disabled:bg-gray-300">
            -
          </button>
        </div>
      </div>
    </main>
  )
}