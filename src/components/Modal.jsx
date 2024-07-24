import { forwardRef, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import confirmedOrderImg from '/images/icon-order-confirmed.svg';
import ConfirmBtn from './ui/ConfirmBtn';
import ModalItem from './ModalItem';

const Modal = forwardRef(function Modal(_props, ref) {
  const { cart, totalPrice, startNewOrder } = useContext(CartContext);

  const handleClick = () => {
    startNewOrder();
    ref.current.close();
  };

  return (
    <dialog
      ref={ref}
      className="w-full max-w-full h-screen rounded-xl mt-16 p-6 m-auto backdrop:bg-black/70 md:w-[45%] md:max-w-[45%] md:h-fit md:m-auto md:p-8"
    >
      <img className="w-1/6" src={confirmedOrderImg} alt="Confirmed Order Icon" />
      <h2 className="text-[2.5rem] text-Rose900 leading-[3rem] font-bold mt-4 md:text-[2.2rem]">Order <br className='md:hidden' /> Confirmed</h2>
      <p className=" text-base text-Rose500 leading-10 md:text-sm">We hope you enjoy your food!</p>
      <ul className="bg-Rose100 flex flex-col rounded-t-md mt-6 md:mt-8">
        {cart.map(item => {
          return <ModalItem key={item.id} {...item} />;
        })}
      </ul>
      <div className="bg-Rose100 flex items-center justify-between rounded-b-md mb-10 py-8 px-6 md:mb-8">
        <p className='text-Rose900'>Order Total</p>
        <h2 className="text-2xl text-Rose900 font-bold">{formatCurrency(totalPrice)}</h2>
      </div>
      <ConfirmBtn label="Start New Order" onClick={handleClick} />
    </dialog>
  );
});

export default Modal;
