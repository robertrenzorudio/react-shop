import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Box>
      <Text
        bgGradient={`linear(to-r, #03c8a8, #89d8d3)`}
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        React Store
      </Text>
    </Box>
  );
};
