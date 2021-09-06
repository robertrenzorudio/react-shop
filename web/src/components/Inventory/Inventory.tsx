import React, { useContext, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { CartContext } from '../../context/cart-context';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { InventoryItem } from './InventoryItem';
import { InventoryItemType } from '../../interface/InventoryItemType';
import { BiError } from 'react-icons/bi';

interface InventoryProps {}

export const Inventory: React.FC<InventoryProps> = () => {
  const cartCtx = useContext(CartContext);
  const {
    data: inventory,
    isFetching: isLoading,
    error,
    sendRequest,
  } = useFetch<InventoryItemType[]>([]);

  useEffect(() => {
    type FetchType = {
      inventory: (InventoryItemType & {
        image: string;
      })[];
    };

    const dataTransformFn = (data: FetchType) => {
      return data.inventory.map(
        ({ id, manufacturer, name, price, formattedPrice, image }) => {
          return {
            id,
            manufacturer,
            name,
            price,
            formattedPrice,
            imgSrc: image,
          };
        }
      ) as InventoryItemType[];
    };

    sendRequest({ input: `${process.env.REACT_APP_API_URL}` }, dataTransformFn);
  }, [sendRequest]);

  if (error) {
    return (
      <Flex direction="column" alignItems="center" p={2}>
        <BiError size={60} color="#718096" />
        <Text
          color="#718096"
          fontSize="4xl"
          fontWeight="extrabold"
          align="center"
        >
          An error has occured!
        </Text>
        <Text
          color="#718096"
          fontSize="4xl"
          fontWeight="extrabold"
          align="center"
        >
          Please try again later.
        </Text>
      </Flex>
    );
  }

  if (isLoading) {
    return (
      <Flex direction="column" alignItems="center" textAlign="center" p={2}>
        <Text fontWeight="thin" fontSize="xl">
          Heroku server may need to wake up, loading may take some time.
        </Text>

        <Spinner speed="1s" size="xl" mt={30} />
      </Flex>
    );
  }

  const addToCartHandler = (item: InventoryItemType) => {
    cartCtx.addItem(item!);
  };

  const inventoryJSX = inventory.map((item) => {
    return (
      <InventoryItem key={item.id} item={item} onAddToCart={addToCartHandler} />
    );
  });

  return (
    <Flex direction="row" width="80%" justifyContent="space-around" wrap="wrap">
      {inventoryJSX}
    </Flex>
  );
};
