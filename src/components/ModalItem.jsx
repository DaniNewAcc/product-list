import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

function ModalItem({ id, quantity }) {
  const { getItem } = useContext(CartContext);
  const modalItem = getItem(id)
  return (
    <li className="mt-6 px-6">
      <div className="flex items-center gap-4 md:gap-6">
        <img className='w-12 h-12 rounded-md' src={modalItem.image.thumbnail} alt="Item Thumbnail" />
        <div className="w-full flex flex-col">
            <h3 className='text-Rose900 text-[.925rem] font-semibold line-clamp-1 md:text-base'>{modalItem.name}</h3>
            <span className="flex gap-4 mt-2">
              <p className='text-Red font-semibold'>{quantity}x</p>
              <p className='text-Rose500'>@{formatCurrency(modalItem.price)}</p>
            </span>
        </div>
        <div className="ms-auto">
          <p className='text-Rose900 font-semibold'>{formatCurrency(modalItem.price * quantity)}</p>
        </div>
      </div>
      <div className="bg-Rose100 border-t border-t-Rose300 mt-6 px-6"></div>
    </li>
  );
}

export default ModalItem;
