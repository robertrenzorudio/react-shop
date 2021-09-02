import React from 'react';

import { InventoryItemContainer } from './InventoryItemContainer';
import { InventoryBody } from './InventoryBody';
import { InventoryImage } from './InventoryImage';
import { InventoryItemType } from '../../interface/InventoryItemType';

interface InventoryItemProps {
  item: InventoryItemType;
  onAddToCart: (item: InventoryItemType) => void;
}
export const InventoryItem: React.FC<InventoryItemProps> = (props) => {
  return (
    <InventoryItemContainer>
      <InventoryImage src={props.item.imgSrc} />
      <InventoryBody {...props} />
    </InventoryItemContainer>
  );
};
