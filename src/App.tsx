import * as React from 'react';
import { ChakraProvider, theme, VStack } from '@chakra-ui/react';
import Header from './components/Header/Header';

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack>
      <Header></Header>
    </VStack>
  </ChakraProvider>
);
