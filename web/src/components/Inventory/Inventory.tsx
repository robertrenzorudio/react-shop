import React, { useContext, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { CartContext } from '../../context/cart-context';
import { Flex, Spinner } from '@chakra-ui/react';
import { InventoryItem } from './InventoryItem';
import { InventoryItemType } from '../../interface/InventoryItemType';

interface InventoryProps {}

export const Inventory: React.FC<InventoryProps> = () => {
  const cartCtx = useContext(CartContext);
  const {
    data: inventory,
    isFetching: isLoading,
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

    sendRequest(
      { input: 'https://api-react-shop.herokuapp.com/inventory' },
      dataTransformFn
    );
  }, [sendRequest]);

  if (isLoading) {
    return <Spinner speed="1s" size="xl" mt={100} />;
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
