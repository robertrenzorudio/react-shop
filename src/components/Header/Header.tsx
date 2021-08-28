import React from 'react';
import { Logo } from './Logo';
import { HeaderMenu } from './HeaderMenu';
import { Flex, Spacer } from '@chakra-ui/react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex as="nav" align="center" w="100%" px={3} boxShadow="base">
      <Logo />
      <Spacer />
      <HeaderMenu />
    </Flex>
  );
};

export default Header;
