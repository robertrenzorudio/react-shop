import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { CartItem } from './CartItem';

interface CartProps {
  cartIsOpen: boolean;
  onCartClose: () => void;
}
export const Cart: React.FC<CartProps> = ({ cartIsOpen, onCartClose }) => {
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={cartIsOpen}
        onClose={onCartClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartItem />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Checkout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
