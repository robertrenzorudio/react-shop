import React from 'react';
import { HStack, Link } from '@chakra-ui/layout';
import { FaGithub } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';
import { IconButtonWrapper } from './IconButtonWrapper';
import { HeaderCart } from './HeaderCart';

interface MenuProps {
  onCartOpen: () => void;
}

export const HeaderMenu: React.FC<MenuProps> = ({ onCartOpen }) => {
  return (
    <Box>
      <HStack spacing="10px">
        <HeaderCart onCartOpen={onCartOpen} />
        <ColorModeSwitch />
        <Link href="https://www.github.com/robertrenzorudio">
          <IconButtonWrapper
            icon={<FaGithub />}
            aria-label="Open github link"
          />
        </Link>
      </HStack>
    </Box>
  );
};
