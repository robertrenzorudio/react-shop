import React from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';

export const IconButtonWrapper: React.FC<IconButtonProps> = (props) => {
  return (
    <IconButton
      size="md"
      fontSize="xl"
      onClick={props.onClick}
      icon={props.icon}
      variant="current"
      aria-label={props['aria-label']}
    />
  );
};
