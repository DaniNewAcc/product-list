import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import carbonNeutralImg from '/images/icon-carbon-neutral.svg';
import CartItem from './CartItem';

function CartList() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className="flex flex-col mt-4 max-md:px-6 md:py-10 xl:py-5">
      <ul className="flex flex-col gap-4 pb-8">
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </ul>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between rounded-b-md">
          <p className="text-Rose900">Order Total</p>
          <h2 className="text-2xl text-Rose900 font-bold">
            {formatCurrency(totalPrice)}
          </h2>
        </div>
        <span className="bg-Rose50 w-full flex justify-center items-center rounded-lg text-center gap-1 py-3 mt-2 mb-4 md:text-[.685rem] xl:text-sm">
          <i>
            <img
              className="me-1"
              src={carbonNeutralImg}
              alt="Carbon Neutral Icon"
            />
          </i>
          This is a <strong>carbon-neutral</strong> delivery
        </span>
      </div>
    </div>
  );
}

export default CartList;
