import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import { Flex, Spinner } from '@chakra-ui/react';
import { InventoryItem } from './InventoryItem';
import { InventoryItemType } from '../../interface/InventoryItemType';

interface InventoryProps {}

export const Inventory: React.FC<InventoryProps> = () => {
  const cartCtx = useContext(CartContext);
  const [inventory, setInventory] = useState<InventoryItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInventory = async () => {
      const res = await fetch('https://api-react-shop.herokuapp.com/inventory');
      const data = (await res.json()) as {
        inventory: (InventoryItemType & {
          image: string;
        })[];
      };

      const transformedData: InventoryItemType[] = data.inventory.map(
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
      );
      setInventory(transformedData);
      setIsLoading(false);
    };

    fetchInventory();
  }, []);

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
