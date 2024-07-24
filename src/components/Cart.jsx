import { CartContext } from '../context/CartContext';
import { useContext, useRef } from 'react';
import Modal from './Modal';
import CartList from './CartList';
import NoItem from './ui/NoItem';
import ConfirmBtn from './ui/ConfirmBtn'

function Cart() {
  const { cart, cartQuantity } = useContext(CartContext);

  const dialogRef = useRef();

  const handleClick = () => {
    dialogRef.current.showModal();
  };

  let cartContent = !cart.length ? (
    <NoItem />
  ) : (
    <>
      <CartList />
      <ConfirmBtn label="Confirm Order" onClick={handleClick} />
    </>
  );

  return (
    <>
      <Modal ref={dialogRef} />
      <section className="bg-white w-full rounded-xl mt-12 mb-6 py-4 md:w-1/3 md:mb-auto md:px-6 md:py-6 xl:w-1/4">
        <h2 className="text-Red text-2xl font-bold max-md:px-6">
          Your Cart ({cartQuantity})
        </h2>
        {cartContent}
      </section>
    </>
  );
}

export default Cart;
