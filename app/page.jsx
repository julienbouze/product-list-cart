"use client";
import { useState } from 'react';
import Attribution from "@/components/Attribution";
import RecipeList from "@/components/RecipeList";
import Cart from "@/components/Cart";

export default function Home() {
  const [quantities, setQuantities] = useState({});

  const handleAddClick = (recipe) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [recipe.name]: (prevQuantities[recipe.name] || 0) + 1,
    }));
  };

  const handleIncrease = (recipeName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [recipeName]: (prevQuantities[recipeName] || 0) + 1,
    }));
  };

  const handleDecrease = (recipeName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [recipeName]: Math.max((prevQuantities[recipeName] || 0) - 1, 0),
    }));
  };

  const removeFromCart = (recipeName) => {
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[recipeName];
    setQuantities(updatedQuantities);
  };

  const resetCart = () => {
    setQuantities({});
  };

  return (
    <>
    <main className="bg-fmbg flex lg:flex-row flex-col min-h-screen items-start p-16 md:p-24 gap-8">
      <RecipeList
        quantities={quantities}
        handleAddClick={handleAddClick}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <Cart quantities={quantities} removeFromCart={removeFromCart} resetCart={resetCart} />
      
    </main>
    <Attribution></Attribution>
    </>
  );
}