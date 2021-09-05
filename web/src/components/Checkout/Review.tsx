import React, { useContext } from 'react';
import { Button } from '@chakra-ui/button';
import { Box, HStack, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { CartContext } from '../../context/cart-context';
import { InventoryItemType } from '../../interface/InventoryItemType';
import { CartItem } from '../Cart/CartItem';

interface ReviewProps {
  onPrev: () => void;
}

export const Review: React.FC<ReviewProps> = ({ onPrev }) => {
  const cartCtx = useContext(CartContext);
  const [isSmall] = useMediaQuery('(max-width: 425px)');

  const addToCartHandler = (item: InventoryItemType) => {
    cartCtx.addItem(item);
  };

  const removeFromCartHandler = (item: InventoryItemType) => {
    cartCtx.removeItem(item);
  };

  const cartJSX = cartCtx.items.map((item) => {
    return (
      <CartItem
        align="center"
        textAlign="left"
        marginBottom="2"
        h="70px"
        p={2}
        key={item.id}
        item={item}
        onAdd={addToCartHandler}
        onRemove={removeFromCartHandler}
        showImage={!isSmall}
      />
    );
  });

  return (
    <Stack spacing={6} p={isSmall ? 0 : 10} pr={5}>
      <Stack direction="column" spacing={4}>
        <Text fontSize="5xl" fontWeight="hairline" alignSelf="center">
          Review your order
        </Text>

        <Box>{cartJSX}</Box>
      </Stack>

      <Stack spacing="1px">
        <HStack
          justifyContent="space-between"
          fontWeight="normal"
          fontSize="lg"
        >
          <Text>Item Total</Text>
          <Text>${cartCtx.totalAmount}</Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          fontWeight="normal"
          fontSize="lg"
        >
          <Text>Shipping</Text>
          <Text as="em" color="tomato">
            Free
          </Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          fontWeight="normal"
          fontSize="lg"
        >
          <Text>Tax</Text>
          <Text>${cartCtx.totalAmount * 0.103}</Text>
        </HStack>
      </Stack>

      <HStack alignSelf="flex-end">
        <Button onClick={onPrev}>Back</Button>
        <Button type="submit" colorScheme="teal">
          Place Order
        </Button>
      </HStack>
    </Stack>
  );
};
