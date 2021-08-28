import React from 'react';
import { Box, Image } from '@chakra-ui/react';

interface InventoryImageProps {
  src: string;
}

export const InventoryImage: React.FC<InventoryImageProps> = ({ src }) => {
  return (
    <Box
      rounded={'lg'}
      mt={-12}
      pos={'relative'}
      height={'230px'}
      _after={{
        transition: 'all .3s ease',
        content: '""',
        w: 'full',
        h: 'full',
        pos: 'absolute',
        top: 5,
        left: 0,
        backgroundImage: `url(${src})`,
        filter: 'blur(15px)',
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: 'blur(20px)',
        },
      }}
    >
      <Image
        rounded={'lg'}
        height={230}
        width={282}
        objectFit={'cover'}
        src={src}
      />
    </Box>
  );
};
