import React from 'react';

import { Box, Center } from '@chakra-ui/react';

interface InventoryItemContainerProps {}

export const InventoryItemContainer: React.FC<InventoryItemContainerProps> = ({
  children,
}) => {
  return (
    <Center>
      <Box
        role={'group'}
        p={6}
        w={'330px'}
        h={'424px'}
        boxShadow="base"
        rounded={'lg'}
        mb="1.5rem"
      >
        {children}
      </Box>
    </Center>
  );
};
