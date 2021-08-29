import React from 'react';
import { Logo } from './Logo';
import { HeaderMenu } from './HeaderMenu';
import { Flex, Spacer } from '@chakra-ui/react';

interface HeaderProps {
  onCartOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  return (
    <Flex as="nav" align="center" w="100%" px={3} boxShadow="base">
      <Logo />
      <Spacer />
      <HeaderMenu onCartOpen={onCartOpen} />
    </Flex>
  );
};
