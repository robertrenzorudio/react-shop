import * as React from 'react';
import { ChakraProvider, theme, useDisclosure, VStack } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Inventory } from './components/Inventory/Inventory';
import { CartProvider } from './context/CartProvider';
import { Cart } from './components/Cart/Cart';
export const App = () => {
  const {
    isOpen: cartIsOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Cart cartIsOpen={cartIsOpen} onCartClose={onCartClose}></Cart>
        <VStack spacing="1rem">
          <Header onCartOpen={onCartOpen}></Header>
          <Inventory />
        </VStack>
      </CartProvider>
    </ChakraProvider>
  );
};
