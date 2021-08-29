import React, { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  Flex,
  Text,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { CartItem } from './CartItem';
import { CartContext } from '../../context/cart-context';
import { InventoryItemType } from '../../interface/InventoryItemType';

interface CartProps {
  cartIsOpen: boolean;
  onCartClose: () => void;
}
export const Cart: React.FC<CartProps> = ({ cartIsOpen, onCartClose }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item: InventoryItemType) => {
    cartCtx.addItem(item);
  };

  const removeFromCartHandler = (item: InventoryItemType) => {
    cartCtx.removeItem(item);
  };

  const cartItemsJSX = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={item}
        onAdd={addToCartHandler}
        onRemove={removeFromCartHandler}
      />
    );
  });

  const cartEmptyJSX = (
    <Text fontSize="4xl" fontWeight="bold" align="center">
      Cart Is Empty
    </Text>
  );

  const cartIsEmpty = cartCtx.items.length === 0;

  let itemsJSX = cartIsEmpty ? cartEmptyJSX : cartItemsJSX;

  return (
    <Modal isOpen={cartIsOpen} onClose={onCartClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <RiShoppingCartLine />
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody>
          <Box
            overflow="scroll"
            h="300px"
            maxH="300px"
            style={{ lineHeight: cartIsEmpty ? '300px' : undefined }}
          >
            {itemsJSX}
          </Box>
          {cartCtx.items.length === 0 && <Divider />}
          <Flex align="center" m={2}>
            <Text fontWeight="extrabold">Total Amount</Text>
            <Spacer />
            <Text fontWeight="extrabold">${cartCtx.totalAmount}</Text>
          </Flex>
        </ModalBody>
        <Divider />
        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            isDisabled={cartCtx.items.length === 0}
          >
            Checkout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
