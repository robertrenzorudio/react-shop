import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { CartContext } from '../../context/cart-context';
import { RiShoppingCartLine } from 'react-icons/ri';

interface HeaderCartProps {
  onCartOpen: () => void;
}

export const HeaderCart: React.FC<HeaderCartProps> = ({ onCartOpen }) => {
  const cartCtx = useContext(CartContext);
  const numCartTotal = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <>
      <Button
        leftIcon={<RiShoppingCartLine />}
        variant="solid"
        aria-label="Open cart"
        colorScheme="teal"
        onClick={onCartOpen}
      >
        {numCartTotal}
      </Button>
    </>
  );
};
