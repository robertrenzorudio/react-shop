import React from 'react';

import { Box, Center } from '@chakra-ui/react';

interface InventoryItemContainerProps {}

export const InventoryItemContainer: React.FC<InventoryItemContainerProps> = ({
  children,
}) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        boxShadow="2xl"
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        {children}
      </Box>
    </Center>
  );
};
