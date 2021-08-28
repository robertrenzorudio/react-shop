import React from 'react';
import { Button } from '@chakra-ui/react';
import { RiShoppingCartLine } from 'react-icons/ri';

interface HeaderCartProps {}

export const HeaderCart: React.FC<HeaderCartProps> = () => {
  return (
    <Button
      leftIcon={<RiShoppingCartLine />}
      variant="solid"
      aria-label="Open cart"
      colorScheme="teal"
    >
      32
    </Button>
  );
};
