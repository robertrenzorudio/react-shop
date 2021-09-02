import React from 'react';
import { Image, Spinner, Flex } from '@chakra-ui/react';

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
        <Flex
          height={height}
          width={width}
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" speed="1.0s" />
        </Flex>
      }
    />
  );
};
