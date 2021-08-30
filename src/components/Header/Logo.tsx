import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { SiNintendogamecube } from 'react-icons/si';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <IconButton
      aria-label="Home"
      colorScheme="linkedin"
      bgClip="border-box"
      variant="ghost"
      icon={<SiNintendogamecube size={50} />}
    />
  );
};
