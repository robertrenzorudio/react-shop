import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@chakra-ui/button';
import { SiNintendogamecube } from 'react-icons/si';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  const history = useHistory();

  const clicHandler = () => {
    history.push('/');
  };
  return (
    <>
      <IconButton
        aria-label="Home"
        colorScheme="linkedin"
        bgClip="border-box"
        variant="ghost"
        icon={<SiNintendogamecube size={50} />}
        onClick={clicHandler}
      />
    </>
  );
};
