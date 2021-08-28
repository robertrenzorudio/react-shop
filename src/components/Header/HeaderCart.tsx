import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { CartContext } from '../../context/cart-context';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useDisclosure } from '@chakra-ui/react';
import { Cart } from '../Cart/Cart';

interface HeaderCartProps {}

export const HeaderCart: React.FC<HeaderCartProps> = () => {
  const cartCtx = useContext(CartContext);
  const numCartTotal = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  console.log(cartCtx.items);
  const {
    isOpen: cartIsOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();
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

      <Cart cartIsOpen={cartIsOpen} onCartClose={onCartClose} />
    </>
  );
};
