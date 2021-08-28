import React from 'react';
import { CartItem } from '../interface/CartItem';
import { InventoryItemType } from '../interface/InventoryItemType';

interface CartCtx {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: InventoryItemType) => void;
  removeItem: (id: number) => void;
}

export const CartContext = React.createContext<CartCtx>({
  items: [],
  totalAmount: 0,
  addItem: (item: InventoryItemType) => {},
  removeItem: (id: number) => {},
});
