import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Text,
  Spacer,
  Divider,
  Image,
  FlexProps,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { CartItemType } from '../../interface/CartItemType';
import { InventoryItemType } from '../../interface/InventoryItemType';

interface CartItemProps extends FlexProps {
  item: CartItemType;
  onAdd: (id: InventoryItemType) => void;
  onRemove: (item: InventoryItemType) => void;
  showImage: boolean;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onAdd,
  onRemove,
  showImage,
  ...props
}) => {
  return (
    <>
      <Flex {...props}>
        {showImage && (
          <Image
            src={item.imgSrc}
            h="90%"
            w={70}
            mr={5}
            objectFit="contain"
          ></Image>
        )}
        <Box>
          <Text fontWeight="extrabold">{item.name}</Text>
          <Text color="gray.500">${item.price}</Text>
        </Box>
        <Spacer />
        <HStack boxShadow="lg" borderRadius="10">
          <IconButton
            variant="ghost"
            icon={<MinusIcon />}
            aria-label="Add item"
            onClick={onRemove.bind(null, item)}
          />
          <Text>{item.amount}</Text>
          <IconButton
            variant="ghost"
            icon={<AddIcon />}
            aria-label="Remove item"
            onClick={onAdd.bind(null, item)}
          />
        </HStack>
      </Flex>
      <Divider />
    </>
  );
};
