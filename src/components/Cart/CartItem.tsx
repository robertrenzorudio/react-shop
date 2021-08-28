import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

interface CartItemProps {}

export const CartItem: React.FC<CartItemProps> = () => {
  return (
    <Flex align="center">
      <Box>Hello</Box>
      <Box>
        <IconButton
          onClick={() => {
            alert('fds');
          }}
          icon={<MinusIcon />}
          aria-label="Add item"
        />
        <IconButton icon={<AddIcon />} aria-label="Remove item" />
      </Box>
    </Flex>
  );
};
