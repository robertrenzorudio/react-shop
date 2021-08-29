import { InventoryItemType } from './InventoryItemType';

export interface CartItemType extends InventoryItemType {
  amount: number;
}
