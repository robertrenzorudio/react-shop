import React from 'react';
import { Logo } from './Logo';
import { HeaderMenu } from './HeaderMenu';
import { Flex } from '@chakra-ui/react';

interface HeaderProps {
  onCartOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  return (
    <Flex
      p={4}
      w="100%"
      align="center"
      justifyContent="space-between"
      boxShadow="base"
      position="sticky"
      top={0}
      zIndex={1}
      backdropFilter="blur(10px)"
    >
      <Logo />
      <HeaderMenu onCartOpen={onCartOpen} />
    </Flex>
  );
};
