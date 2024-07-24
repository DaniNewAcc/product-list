import data from '../assets/data.json';
import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  cartQuantity: 0,
  totalPrice: 0,
  getItemQuantity: () => {},
  getItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeItemFromCart: () => {},
  startNewOrder: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getItemQuantity = id => {
    return cart.find(item => item.id === id)?.quantity || 0;
  };

  const getItem = (id) => {
    const item = data.find(i => i.id === id);
    if (item == null) {
      return null;
    } else {
      return item;
    }
  }

  const cartQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const totalPrice = cart.reduce((total, cartItem) => {
    const item = data.find(i => i.id === cartItem.id);
    return total + (item.price || 0) * cartItem.quantity;
  }, 0);


  const increaseQuantity = id => {
    setCart(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = id => {
    setCart(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = id => {
    setCart(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  };

  const startNewOrder = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        totalPrice,
        getItemQuantity,
        getItem,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        startNewOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
