import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import cartIcon from '/images/icon-add-to-cart.svg';
import AddToCartBtn from './ui/AddToCartBtn';
import QuantityBtn from './QuantityBtn';

function ItemCard({ id, name, category, image, price }) {
  const { increaseQuantity, decreaseQuantity, getItemQuantity } =
    useContext(CartContext);

  const quantity = getItemQuantity(id);

  let btnClasses =
    'w-[10.5rem] flex rounded-3xl py-3 font-semibold md:w-fit xl:w-[10.5rem]';
  let itemImgClasses = 'w-full h-[70%] object-cover rounded-xl md:h-fit';

  if (quantity === 0) {
    btnClasses +=
      ' bg-white items-center justify-center border border-Rose400 px-3 text-sm hover:text-Red hover:border-Red xl:gap-2 xl:text-base';
  } else {
    btnClasses += ' bg-Red text-white justify-between';
    itemImgClasses += ' border-2 border-Red';
  }

  let btnContent =
    quantity === 0 ? (
      <AddToCartBtn
        classes={btnClasses}
        icon={cartIcon}
        altText="Cart Icon"
        label="Add to Cart"
        onAddItem={() => increaseQuantity(id)}
      />
    ) : (
      <QuantityBtn
        classes={btnClasses}
        itemQuantity={quantity}
        onDecreaseQuantity={() => decreaseQuantity(id)}
        onIncreaseQuantity={() => increaseQuantity(id)}
      />
    );

  

  return (
    <div className="h-[300px] flex flex-col items-center md:h-full">
      <img
        className={itemImgClasses}
        srcSet={`${image.mobile} 425w, ${image.tablet} 768w, ${image.desktop} 992w`}
        src={image.mobile}
        alt={name}
      />
      <span className="relative z-20 top-[-8%] md:top-[-5%]">
        {btnContent}
      </span>
      <div className="w-full relative z-10 top-[-3%] md:top-[-2%]">
        <p className="text-Rose500 text-sm">{category}</p>
        <h3 className="text-Rose900 text-base leading-7 font-semibold">
          {name}
        </h3>
        <p className="text-Red font-semibold">{formatCurrency(price)}</p>
      </div>
    </div>
  );
}

export default ItemCard;
