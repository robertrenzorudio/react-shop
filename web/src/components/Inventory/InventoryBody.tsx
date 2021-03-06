import React from 'react';
import {
  Heading,
  Text,
  Stack,
  HStack,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { InventoryItemType } from '../../interface/InventoryItemType';

interface InventoryBodyProps {
  item: InventoryItemType;
  onAddToCart: (id: InventoryItemType) => void;
}

export const InventoryBody: React.FC<InventoryBodyProps> = ({
  item,
  onAddToCart,
}) => {
  return (
    <Stack pt={10} align={'center'}>
      <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
        {item.manufacturer}
      </Text>
      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
        {item.name}
      </Heading>
      <HStack align="center">
        <Text fontWeight={800} fontSize={'xl'}>
          {item.formattedPrice}
        </Text>
        <Spacer />
        <Spacer />
        <IconButton
          icon={<RiShoppingCartLine />}
          aria-label="Add to cart"
          isRound={true}
          colorScheme="teal"
          onClick={onAddToCart.bind(null, item)}
        />
      </HStack>
    </Stack>
  );
};
