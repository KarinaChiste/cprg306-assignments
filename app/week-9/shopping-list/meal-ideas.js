"use client"
import { useState, useEffect } from "react";

export function MealIdeas({ingredient})
{
  
  const [meals, setMeals] = useState([]);

  // const loadMealIdeas =()=>{
  //   const mealIdeas = async () =>{await fetchMealIdeas(ingredient)}
  //   setMeals(mealIdeas);
  // }
  // useEffect(() => {loadMealIdeas()},[ingredient]);
  
useEffect(() => {
  const loadMealIdeas = async () => {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  };

  if (ingredient) {
    loadMealIdeas();
  }
  
}, [ingredient]);


  return(
    <div className="justify-self-center my-20 ">
      <header> <h2 className="text-center font-bold">Meals using {ingredient}</h2></header>
      <ul className="justify-self-center mr-10">
         
      {Array.isArray(meals) && meals.length === 0 && (
        <li className="text-gray-500">No Meals Found</li>
      )}

        {Array.isArray(meals) &&
          meals.map((meal) => (
            <li className="px-3 py-3 border-1 rounded-2xl my-3 mx-6 " key={meal.idMeal}>{meal.strMeal}</li>
          ))}
   
        
        </ul>
        
    </div>
  );
}


async function fetchMealIdeas(ingredient)
  {
    
      try 
      {
        
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // alert(response.status)
        if (!response.ok) {
          throw new Error(
            `HTTP Error! status ${response.status}\n ${response.message}`
          );
        }
        const data = await response.json();
        // console.log(data.meals[0].strMeal)
        if (data.meals){
          return data.meals;
        }
        else{
          return [];
        };
      }
      catch(error){
        console.error("Error: ", error);
      }
  }