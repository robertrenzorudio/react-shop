import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { Flex } from '@chakra-ui/react';
import { InventoryItem } from './InventoryItem';
import { InventoryItemType } from '../../interface/InventoryItemType';

interface InventoryProps {
  invetoryItems: InventoryItemType[];
}

export const Inventory: React.FC<InventoryProps> = ({ invetoryItems }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item: InventoryItemType) => {
    cartCtx.addItem(item!);
  };

  const inventory = invetoryItems.map((item) => {
    return (
      <InventoryItem key={item.id} item={item} onAddToCart={addToCartHandler} />
    );
  });

  return (
    <Flex direction="row" width="80%" justifyContent="space-around" wrap="wrap">
      {inventory}
    </Flex>
  );
};
