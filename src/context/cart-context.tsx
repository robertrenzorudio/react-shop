import React from 'react';
import { CartItemType } from '../interface/CartItemType';
import { InventoryItemType } from '../interface/InventoryItemType';

interface CartCtx {
  items: CartItemType[];
  totalAmount: number;
  addItem: (item: InventoryItemType) => void;
  removeItem: (item: InventoryItemType) => void;
}

export const CartContext = React.createContext<CartCtx>({
  items: [],
  totalAmount: 0,
  addItem: (item: InventoryItemType) => {},
  removeItem: (item: InventoryItemType) => {},
});
