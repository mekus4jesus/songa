import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

export const CustomModal = ({ isOpen, onClose, initialPosition, children }) => {
  const [position, setPosition] = useState(initialPosition);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="auto" isCentered={false}>
      <ModalOverlay />
      <ModalContent
        position="absolute"
        top={position.y}
        left={position.x}
        zIndex='99999'
        margin="auto"
        width='629px'
        border='none'
        backgroundColor='transparent'
      >
        {children}
      </ModalContent>
    </Modal>
  )
}
