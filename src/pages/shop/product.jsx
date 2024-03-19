import { Box, Image, Link, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import { useShop } from '../../usecontext/usecontext'

export const Product = (props) => {
  const {id,productName,price,productImage} = props.data
  const {addToCart} = useShop()
  return (
   <VStack>
     <Box mt='3rem' px={8} >
      <Link as={RouterLink} to='/cart' _hover={{textDecoration: 'none'}} >
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
  </Link>
    </Box>
   </VStack>
  )
}


