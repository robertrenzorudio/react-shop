import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  ChakraProvider,
  useDisclosure,
  VStack,
  extendTheme,
} from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Inventory } from './components/Inventory/Inventory';
import { CartProvider } from './context/CartProvider';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '426px',
  lg: '769px',
  xl: '1025px',
});

const theme = extendTheme({
  components: {
    Steps,
  },
  breakpoints,
});

export const App = () => {
  const {
    isOpen: cartIsOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Cart cartIsOpen={cartIsOpen} onCartClose={onCartClose}></Cart>
          <VStack spacing="1rem">
            <Route path="/" render={() => <Header onCartOpen={onCartOpen} />} />
            <Route path="/" exact component={Inventory} />
            <Route path="/checkout" component={Checkout} />
          </VStack>
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  );
};
