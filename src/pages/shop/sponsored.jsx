import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'


export const Sponsored = (props) => {
  const {productName,price,productImage} = props.data
  return (
   <VStack>
     <Box mt='3rem' px={8} >
     <Box 
     display='flex' 
     alignItems='center'
     width='350px'
     p='0.6rem'
     mb='1.5rem'
     >
       <Image boxSize='100px' objectFit='cover' src={productImage} />
       <Box ml='0.6rem'>
        <Text> {productName} </Text>
        <Text as='strong'>₦{price}</Text>
       </Box>
     </Box>
    </Box>
   </VStack>
  )
}


