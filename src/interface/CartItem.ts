import { InventoryItemType } from './InventoryItemType';

export interface CartItem extends InventoryItemType {
  amount: number;
}
