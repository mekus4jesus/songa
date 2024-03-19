import { Box, Heading, ListItem, } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const listStyle = {
  listStyle: 'none'
}

export const SearchList = ({props}) => {
  const {id,productName,price,productImage} = props.data
  return (
    <>
        <ListItem>
        <Box 
            display='flex' 
            alignItems='center'
            _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'}}
            transition='box-shadow 0.3s ease-in-out'
            width='350px'
            p='0.6rem'
            cursor='pointer'
            mb='1.5rem'
            onClick={() => addToCart(id)}
            >
            <Image boxSize='100px' objectFit='cover' src={productImage} />
            <Box ml='0.6rem'>
              <Text> {productName} </Text>
              <Text as='strong'>₦{price}</Text>
            </Box>
          </Box>
        </ListItem>
    </>
  )
}


