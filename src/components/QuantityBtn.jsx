import DecreaseIcon from './ui/DecreaseIcon';
import IncreaseIcon from './ui/IncreaseIcon';

function QuantityBtn({
  classes,
  itemQuantity,
  onDecreaseQuantity,
  onIncreaseQuantity
}) {
  let iconClasses =
    'w-6 border-2 border-white rounded-full mx-4 cursor-pointer group duration-200 hover:bg-white';

    
  return (
    <div className={classes}>
      <button className={iconClasses} onClick={onDecreaseQuantity}>
        <DecreaseIcon />
      </button>
      <span>{itemQuantity}</span>
      <button className={iconClasses} onClick={onIncreaseQuantity}>
        <IncreaseIcon />
      </button>
    </div>
  );
}

export default QuantityBtn;
