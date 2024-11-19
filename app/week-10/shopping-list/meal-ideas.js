"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [maxItems, setMaxItems] = useState(12); // State variable to control the maximum number of items

    // API Fetching Function
    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }

    // Load Function
    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    // useEffect Hook
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    // Render Component
    return (
        <div>
            <h2 className='text-violet-900 font-bold pt-10'>Meal Ideas for {ingredient}</h2>
            <ul className='flex flex-wrap'>
                {meals && meals.slice(0,maxItems).map(meal => (
                    <li key={meal.idMeal} className='w-1/4 p-2 flex flex-col items-center'>
                        <h3 className='text-violet-900'>{meal.strMeal}</h3>
                        <img className='max-w-40 max-h-30' src={meal.strMealThumb} alt={meal.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}