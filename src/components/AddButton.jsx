import Image from 'next/image';;
import CartIcon from 'public/images/icon-add-to-cart.svg';

const AddButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='flex px-4 py-2 -mt-5 rounded-full bg-white border border-rose-900 z-10 relative mx-auto justify-center items-center text-xs w-9/12 md:w-10/12 font-semibold'
        >
            <Image src={CartIcon} alt='' />
            Add to Cart
        </button>
    );
};

export default AddButton;