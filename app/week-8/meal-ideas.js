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
    <div>
      <header> <h2>Meals</h2></header>
      <ul>
        
        {Array.isArray(meals) &&
          meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
   
        
        </ul>
        
    </div>
  );
}


async function fetchMealIdeas(ingredient)
  {
    alert("Getting Meal Ideas");
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