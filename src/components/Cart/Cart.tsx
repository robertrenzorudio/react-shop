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
  Text,
} from '@chakra-ui/react';

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
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            fefefefe
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
