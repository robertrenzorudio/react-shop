import React, { useReducer, useEffect } from 'react';
import { CartItemType } from '../interface/CartItemType';
import { InventoryItemType } from '../interface/InventoryItemType';
import { CartContext } from './cart-context';

type CartState = {
  items: CartItemType[];
  totalAmount: number;
};

type CartAction = {
  type: string;
  payload: InventoryItemType;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedTotalAmount = state.totalAmount + action.payload.price;

      const updateIndex = state.items.findIndex(
        ({ id }) => id === action.payload.id
      );

      let updatedItems = [...state.items];
      if (updateIndex >= 0) {
        const itemToUpdate = state.items[updateIndex];
        const updatedItem = {
          ...itemToUpdate,
          amount: itemToUpdate.amount + 1,
        };
        updatedItems[updateIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat({ ...action.payload, amount: 1 });
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case 'REMOVE_ITEM': {
      const updatedTotalAmount = state.totalAmount - action.payload.price;

      const updateIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const itemToUpdate = state.items[updateIndex];

      let updatedItems = [...state.items];
      if (itemToUpdate.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...itemToUpdate,
          amount: itemToUpdate.amount - 1,
        };
        updatedItems[updateIndex] = updatedItem;
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    default: {
      return state;
    }
  }
};

let defaultCartState: CartState = localStorage.getItem('cartState')
  ? JSON.parse(localStorage.getItem('cartState')!)
  : { items: [], totalAmount: 0 };

interface CartProviderProps {}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCartState);

  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item: InventoryItemType) => {
    dispatchCart({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = (item: InventoryItemType) => {
    dispatchCart({ type: 'REMOVE_ITEM', payload: item });
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
