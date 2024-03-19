import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputRightAddon, List, ListItem, Modal, InputLeftElement, Heading, Image, Text } from '@chakra-ui/react';
import { PRODUCTS } from '../product';
import { CustomModal } from './modal';

export const SearchItem = ({ searchQuery, setSearchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialPosition = { x: 360, y: 0 }; 
  const inputRef = useRef(null);

  const filteredProducts = PRODUCTS.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      inputRef.current.focus(); // Focus back on the original input
      setIsModalOpen(false); // Close the modal when search query becomes empty
    } else {
      setIsModalOpen(true); // Open the modal if there's any input
    }
  }, [searchQuery]);
  

  return (
    <Box>
      <InputGroup w='600px'>
        <Input
          type="text"
          id="searchQuery"
          role='searchbox'
          value={searchQuery}
          focusBorderColor='#ccc'
          bgColor='white'
          color='black'
          placeholder='Search for products, brands and categories'
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsModalOpen(!!e.target.value); // Open modal if there's any input
          }}
          ref={inputRef}
        />
        <InputRightAddon bgColor='#FBA100'>
          <SearchIcon />
        </InputRightAddon>
      </InputGroup>

      <CustomModal isOpen={isModalOpen} onClose={closeModal} initialPosition={initialPosition} motionPreset="slideInBottom" onOverlayClick={closeModal}>
        <Box p='1rem'>
          <InputGroup>
            <Input
              type="text"
              id="modalSearchQuery"
              value={searchQuery}
              bgColor='white'
              color='black'
              focusBorderColor='#ccc'
              placeholder='Search for products, brands and categories'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputRightAddon bgColor='#FBA100' p={5}>
              <SearchIcon />
            </InputRightAddon>
          </InputGroup>
        </Box>
        <Box maxH="400px" overflowY="auto" border='2px solid #ccc' borderRadius='10px' backgroundColor='#fff' color='black'>
          <List>
          <Box bg='#ccc' color='#000'>
              <Heading as='h4' size='md' p='0.2em'>Suggestions </Heading>
            </Box>
            <Box>
            <Text px={6}>{searchQuery}</Text>
            </Box>
            <Box bg='#ccc' color='#000'>
              <Heading as='h4' size='md' p='0.2em'>Products </Heading>
            </Box>
            <Box px={2} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'}} transition='box-shadow 0.3s ease-in-out'>
              {filteredProducts.length === 0 ? (
                <ListItem>
                  <Text as='b'>No Result found for {searchQuery}</Text>
                </ListItem>
              ) : (
                filteredProducts.map(product => (
                  <ListItem key={product.id}>
                    <Box mt='0.5rem' borderRadius="10px" display="flex" alignItems="center" _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'}} transition='box-shadow 0.3s ease-in-out' cursor='pointer'>
                      <Image objectFit="cover" boxSize='80px' src={product.productImage} alt={product.productName} mr='0.6rem' />
                      <Text>{product.productName}</Text>
                    </Box>
                  </ListItem>
                ))
              )}
            </Box>
          </List>
        </Box>
      </CustomModal>
    </Box>
  )
}
