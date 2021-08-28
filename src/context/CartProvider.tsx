import React, { useReducer } from 'react';
import { CartItem } from '../interface/CartItem';
import { InventoryItemType } from '../interface/InventoryItemType';
import { CartContext } from './cart-context';

type CartState = {
  items: CartItem[];
  totalAmount: number;
};

type CartAction = {
  type: string;
  payload: InventoryItemType;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedTotalAmount = state.totalAmount + action.payload.price;
      const payloadItemIndex = state.items.findIndex(
        ({ id }) => id === action.payload.id
      );

      let updatedItems = [...state.items];
      if (payloadItemIndex >= 0) {
        const itemOnCurrState = state.items[payloadItemIndex];
        const updatedItem = {
          ...itemOnCurrState,
          amount: itemOnCurrState.amount + 1,
        };
        updatedItems[payloadItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat({ ...action.payload, amount: 1 });
      }

      console.log(updatedItems);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    default:
      return state;
  }
};

const defaultCartState: CartState = { items: [], totalAmount: 0 };

interface CartProviderProps {}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item: InventoryItemType) => {
    dispatchCart({ type: 'ADD_ITEM', payload: item });
  };
  const addItemFromCart = (id: number) => {};

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemToCart,
    removeItem: addItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
