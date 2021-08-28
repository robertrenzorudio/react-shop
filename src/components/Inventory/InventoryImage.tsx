import React from 'react';
import { Image } from '@chakra-ui/react';

interface InventoryImageProps {
  src: string;
}

export const InventoryImage: React.FC<InventoryImageProps> = ({ src }) => {
  return (
    <>
      <Image
        rounded={'lg'}
        height={230}
        width={282}
        objectFit={'cover'}
        src={src}
      />
    </>
  );
};
