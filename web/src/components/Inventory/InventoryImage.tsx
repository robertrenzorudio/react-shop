import React from 'react';
import { Image, Spinner, Box } from '@chakra-ui/react';

interface InventoryImageProps {
  src: string;
}

export const InventoryImage: React.FC<InventoryImageProps> = ({ src }) => {
  const height = 230;
  const width = 282;

  return (
    <Image
      rounded="lg"
      height={height}
      width={width}
      objectFit="contain"
      src={src}
      fallback={
        <Box
          height={height}
          width={width}
          lineHeight={`${height}px`}
          align="center"
        >
          <Spinner size="xl" speed="1.0s" />
        </Box>
      }
    />
  );
};
