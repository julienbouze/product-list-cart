import React from 'react';
import Image from 'next/image';
import ImageMapper from './ImageMapper';
import OrderConfirmed from 'public/images/icon-order-confirmed.svg'

export default function Confirmation({ isOpen, onClose, orderDetails }) {
    if (!isOpen) return null;

    return (
        <div className='justify-end flex fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-slate-900/75  items-end md:items-center justify-center'>
            <div className='flex flex-col bg-white p-4 gap-4 rounded-t-lg md:rounded-lg shadow-lg w-full lg:w-2/5 md:w-3/5 h-4/5 overflow-auto'>
                <Image src={OrderConfirmed} alt='Order Confirmed' />
                <div className='flex flex-col'>
                    <h3 className='text-3xl font-bold text-rose-900'>Order Confirmed</h3>
                    <p className='text-rose-500'>We hope you enjoy your food!</p>
                </div>

                <div className="flex flex-col bg-fmbg px-4 pt-2 pb-4 rounded">
                    {orderDetails.items.map((item, index) => (
                        <div key={index} className="py-2 gap-2 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className='flex gap-2'>
                                    <Image src={ImageMapper(item.thumbnail)} alt={item.name} className="rounded w-12 h-12 object-cover" width={300} height={300} />
                                    <div className='flex flex-col'>
                                        <p className="font-semibold">{item.name}</p>
                                        <div className='flex gap-4'>
                                            <p className="text-fmred font-bold">{item.quantity}x</p>
                                            <p className="text-rose-500 font-semibold">@${item.unitPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg font-bold text-rose-900">${(item.unitPrice * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-4 pt-2">
                        <p className="font-semibold text-rose-500">Order Total</p>
                        <p className='text-2xl font-bold text-rose-900'>${orderDetails.total.toFixed(2)}</p>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button onClick={onClose} className="w-full px-4 py-2 hover:bg-fmreddark bg-fmred text-white rounded-full">Start New Order</button>
                </div>
            </div>
        </div>
    );
}