"use client";
import IncrementIcon from 'public/images/icon-increment-quantity.svg';
import DecrementIcon from 'public/images/icon-decrement-quantity.svg';
import IncrementIconHover from 'public/images/icon-increment-quantity-hover.svg';
import DecrementIconHover from 'public/images/icon-decrement-quantity-hover.svg';
import { useState } from 'react';
import Image from 'next/image';

const QuantityButton = ({ quantity, onIncrease, onDecrease }) => {
  const [hoveredIncrement, setHoveredIncrement] = useState(false);
  const [hoveredDecrement, setHoveredDecrement] = useState(false);

  return (
    <div className='text-white flex px-4 py-2 -mt-5 rounded-full z-10 relative mx-auto justify-between items-center  w-10/12 lg:w-9/12 bg-fmred text-xs'>
      <button
        onClick={onDecrease}
        className='flex border-2 border-white rounded-full w-6 h-6 justify-center items-center hover:bg-white hover:text-fmred'
        onMouseEnter={() => setHoveredDecrement(true)}
        onMouseLeave={() => setHoveredDecrement(false)}
      >
        <Image src={hoveredDecrement ? DecrementIconHover : DecrementIcon} width={12} height={12} alt="Decrement" />
      </button>
      <span>{quantity}</span>
      <button
        onClick={onIncrease}
        className='flex border-2 border-white rounded-full w-6 h-6 justify-center items-center hover:bg-white hover:text-fmred'
        onMouseEnter={() => setHoveredIncrement(true)}
        onMouseLeave={() => setHoveredIncrement(false)}
      >
        <Image src={hoveredIncrement ? IncrementIconHover : IncrementIcon} width={12} height={12} alt="Increment" />
      </button>
    </div>
  );
};

export default QuantityButton;