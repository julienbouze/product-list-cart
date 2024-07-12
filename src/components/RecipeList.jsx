import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import recipes from '@/data/recipes.json';
import ImageMapper from '@/components/ImageMapper';
import AddButton from '@/components/AddButton';
import QuantityButton from '@/components/QuantityButton';

const RecipeList = ({ quantities, handleAddClick, handleIncrease, handleDecrease }) => {
  return (
    <div className='flex flex-col w-full'>
      <h1 className='font-bold text-rose-900 text-3xl mb-6'>Desserts</h1>
      <div className='flex flex-col md:flex-row md:flex-wrap items-start gap-4'>
        {recipes.map((recipe, index) => (
          <div className='md:basis-md lg:basis-lg w-full' key={index}>
            <div className='flex flex-col justify-center items-center'>
              <Image
                className={`hidden lg:flex rounded-lg ${quantities[recipe.name] > 0 ? 'border-2 border-fmred' : ''}`}
                src={ImageMapper(recipe.image.desktop)}
                alt={recipe.name}
                width={2500}
                height={2500}
              />
              <Image
                className={`hidden md:flex lg:hidden rounded-lg ${quantities[recipe.name] > 0 ? 'border-2 border-fmred' : ''}`}
                src={ImageMapper(recipe.image.tablet)}
                alt={recipe.name}
                width={2500}
                height={2500}
              />
              <Image
                className={`md:hidden flex rounded-lg ${quantities[recipe.name] > 0 ? 'border-2 border-fmred' : ''}`}
                src={ImageMapper(recipe.image.mobile)}
                alt={recipe.name}
                width={2500}
                height={2500}
              />
              {quantities[recipe.name] !== undefined && quantities[recipe.name] > 0 ? (
                <QuantityButton
                  quantity={quantities[recipe.name]}
                  onIncrease={() => handleIncrease(recipe.name)}
                  onDecrease={() => handleDecrease(recipe.name)}
                />
              ) : (
                <AddButton onClick={() => handleAddClick(recipe)} />
              )}
            </div>
            <p className='text-rose-400'>{recipe.category}</p>
            <p className='font-bold'>{recipe.name}</p>
            <p className='text-fmred font-semibold'>${recipe.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;