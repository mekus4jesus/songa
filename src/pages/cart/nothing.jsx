import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputRightAddon, List, ListItem, ModalBody } from '@chakra-ui/react';
import { PRODUCTS } from '../product';
import { Link as RouterLink } from 'react-router-dom';
import { CustomModal } from './modal';

export const SearchItem = ({ searchQuery, setSearchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialPosition = { x: 360, y: 8 };
  const inputRef = useRef(null);

  const filteredProducts = PRODUCTS.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closeModal = () => {
    if (!searchQuery.trim()) { // Check if searchQuery is empty or whitespace
      setIsModalOpen(false);
    }
  };

  // useEffect hook to set focus to inputRef when searchQuery becomes empty
  useEffect(() => {
    if (!searchQuery.trim()) {
      inputRef.current.focus();
    }
  }, [searchQuery]);

  return (
    <Box>
      {searchQuery.length === 0 ? (
        <InputGroup w='600px' opacity={searchQuery.length > 0 ? 0 : 1} position='relative'>
          <Input
            type="text"
            id="searchQuery"
            role='searchbox'
            value={searchQuery}
            ref={inputRef}
            bgColor='white'
            color='black'
            placeholder='Search for products, brands and categories'
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsModalOpen(!!e.target.value); // Open modal if there's any input
            }}
          />
          <InputRightAddon bgColor='#FBA100'>
            <SearchIcon />
          </InputRightAddon>
        </InputGroup>
      ) : (
        <CustomModal isOpen={isModalOpen} onClose={closeModal} initialPosition={initialPosition} motionPreset="slideInBottom">
          <ModalBody p={0}>
            <InputGroup>
              <Input
                type="text"
                id="modalSearchQuery"
                value={searchQuery}
                bgColor='white'
                color='black'
                placeholder='Search for products, brands and categories'
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputRightAddon bgColor='#FBA100' p={5}>
                <SearchIcon  />
              </InputRightAddon>
            </InputGroup>
            <Box maxH="400px" overflowY="auto">
              <List>
                {filteredProducts.map(product => (
                  <ListItem key={product.id}>
                    <RouterLink to={`/cart/${product.id}`}>{product.productName}</RouterLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </ModalBody>
        </CustomModal>
      )}
    </Box>
  )
}
