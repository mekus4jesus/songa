// homemain.jsx

import React, { useState, useMemo } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { PRODUCTS } from '../../product';
import { Product } from '../shop/product';
import { Sponsored } from '../shop/sponsored';

export const HomeMainSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return PRODUCTS; // If search query is empty, return all products
    }

    const formattedSearchQuery = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter(product =>
      product.productName.toLowerCase().includes(formattedSearchQuery)
    );
  }, [searchQuery]);

  return (
    <Box mt='1rem' px={8} bgColor='#fff'>
      <Box display='flex' alignItems='center' bg='#94004F' w='100%' p={2} color='white'>
        <Heading as='h1' ml='0.7rem'>Today's Deal</Heading>
        <Button ml='2rem' colorScheme='white' variant='link'>
          see all items
        </Button>
      </Box> 
      <Box display='grid' gridTemplateColumns='repeat(3,1fr)' gap={6}>
        {filteredProducts.map(product => (
          <Product data={product} key={product.id} />
        ))}
      </Box>
      <Box px={8}>
        <Box boxShadow='md' fontSize='1.4rem' mt='2rem'>
          <Text as='b'> Sponsored Products </Text>
        </Box>
        <Box overflowX='auto' whiteSpace='nowrap' display='flex' mb='5rem'>
          {filteredProducts.map(product => (
            <Sponsored key={product.id} data={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
