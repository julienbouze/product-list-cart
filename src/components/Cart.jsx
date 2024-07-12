import React, { useState } from 'react';
import Image from 'next/image';
import Confirmation from '@/components/Confirmation';
import recipes from '@/data/recipes.json';
import EmptyCart from 'public/images/illustration-empty-cart.svg';
import RemoveItem from 'public/images/icon-remove-item.svg';
import RemoveItemHover from 'public/images/icon-remove-item-hover.svg';
import CarbonNeutral from 'public/images/icon-carbon-neutral.svg';

const Cart = ({ quantities, removeFromCart, resetCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredItemIcons, setHoveredItemIcons] = useState({});

  const totalItems = Object.values(quantities).reduce((acc, curr) => acc + curr, 0);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(quantities).forEach((recipeName) => {
      const recipe = recipes.find((r) => r.name === recipeName);
      if (recipe) {
        const unitPrice = recipe.price;
        const quantity = quantities[recipeName];
        totalPrice += unitPrice * quantity;
      }
    });
    return totalPrice;
  };

  const getOrderDetails = () => {
    let items = [];
    Object.keys(quantities).forEach((recipeName) => {
      const recipe = recipes.find((r) => r.name === recipeName);
      if (recipe && quantities[recipeName] > 0) {
        items.push({
          name: recipeName,
          unitPrice: recipe.price,
          quantity: quantities[recipeName],
          thumbnail: recipe.image.thumbnail
        });
      }
    });
    return {
      items: items,
      total: calculateTotalPrice()
    };
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetCart();
  };

  const handleMouseEnter = (recipeName) => {
    setHoveredItemIcons((prevIcons) => ({
      ...prevIcons,
      [recipeName]: RemoveItemHover
    }));
  };

  const handleMouseLeave = (recipeName) => {
    setHoveredItemIcons((prevIcons) => ({
      ...prevIcons,
      [recipeName]: RemoveItem
    }));
  };

  return (
    <div className='flex flex-col bg-white w-full rounded-md gap-4 basis-6/12 p-6'>
      <h1 className='text-2xl font-bold text-fmred'>Your Cart ({totalItems})</h1>
      {totalItems === 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <Image src={EmptyCart} width={100} height={100} alt="Empty Cart" />
          <p className='font-semibold text-rose-500'>Your added items will appear here</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {Object.keys(quantities).map((recipeName) => (
            quantities[recipeName] > 0 && (
              <div key={recipeName} className="flex items-center justify-between border-b border-gray-300 py-2">
                <div className="flex flex-col items-start">
                  <p className='text-rose-950 font-bold'>{recipeName}</p>
                  <div className='flex gap-4'>
                    <p className='text-fmred font-bold'>{quantities[recipeName]}x</p>
                    <p className='text-rose-300'>@${recipes.find((r) => r.name === recipeName).price.toFixed(2)}</p>
                    <p className='text-rose-400 font-semibold'>${(recipes.find((r) => r.name === recipeName).price * quantities[recipeName]).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="flex border-2 border-rose-300 hover:border-rose-500 rounded-full w-6 h-6 justify-center items-center"
                    onClick={() => removeFromCart(recipeName)}
                    onMouseEnter={() => handleMouseEnter(recipeName)}
                    onMouseLeave={() => handleMouseLeave(recipeName)}
                  >
                    <Image className='' src={hoveredItemIcons[recipeName] || RemoveItem} width={10} height={10} alt="Remove Item" />
                  </button>
                </div>
              </div>
            )
          ))}
          <div className="flex justify-between mt-4">
            <p className="font-semibold text-rose-500">Order Total</p>
            <p className='font-bold text-rose-900 text-xl'>${calculateTotalPrice().toFixed(2)}</p>
          </div>
          <div className="flex justify-center gap-4 p-3 rounded my-1 bg-fmbg text-rose-900 w-full">
            <Image className='' src={CarbonNeutral} width={0} height={0} alt="Carbon Neutral" />
            <p className="text-sm">This is a <span className='font-semibold'>carbon-neutral</span> delivery</p>
          </div>
          <button
            className='bg-fmred hover:bg-fmreddark w-full rounded-full text-white p-3'
            onClick={() => setIsModalOpen(true)}
          >
            Confirm Order
          </button>
          <Confirmation
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            orderDetails={getOrderDetails()}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;