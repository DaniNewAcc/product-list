import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import RemoveItemIcon from './ui/RemoveItemIcon';

function CartItem({ id, quantity }) {
  const { getItem, removeItemFromCart } = useContext(CartContext);
  const cartItem = getItem(id);
  return (
    <li className="flex justify-between items-center pb-4 border-b border-b-Rose300">
      <div className="flex flex-col">
        <h3 className="text-Rose900 font-semibold">{cartItem.name}</h3>
        <span className="flex gap-4 mt-2">
          <p className="text-Red font-semibold">{quantity}x</p>
          <p className='text-Rose500'>@{formatCurrency(cartItem.price)}</p>
          <p className="text-Rose900 font-semibold">
            {formatCurrency(cartItem.price * quantity)}
          </p>
        </span>
      </div>
      <div>
        <button
          className="w-5 h-5 rounded-full border-2 border-Rose300 group cursor-pointer hover:border-Rose900"
          onClick={() => removeItemFromCart(id)}
        >
          <RemoveItemIcon />
        </button>
      </div>
    </li>
  );
}

export default CartItem;
