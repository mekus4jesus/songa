import { Box, Heading, IconButton, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { FiMinus, FiTrash2 } from "react-icons/fi"
import { GoPlus } from "react-icons/go"
import { useShop } from '../../usecontext/usecontext'


export const CartItem = (props) => {
  const {id,productName,price,productImage} = props.data
  const {cartItem,addToCart,removeFromCart,updateCartItemAmount, deleteFromCart} = useShop()
 
  
  const handleRemoveFromCart = () => {
    if (cartItem[id] === 1) {
     return
    }else{
      removeFromCart(id);
    }
  }
  
  return (
    <Box display='flex'>
      <Box px={2} mt='1.2rem' boxSize='sm'>
        <Image  src={productImage} alt={productName}  />
      </Box>
      <Box mt='2.5rem'>
        <Heading as='h1' mb='3rem'>{productName}</Heading>
        <Text fontSize='1.3rem' fontWeight='700'>₦{price}</Text>
        <Box display='flex' mt='2rem'>
          <Text mr='1rem'> Quatity : </Text>
          <IconButton aria-label='minus cart'  icon={<FiMinus />} colorScheme='teal' onClick={() => handleRemoveFromCart()}/>
          <Input value={cartItem[id]} width='50px' onChange={(e) => updateCartItemAmount(Number(e.target.value),id)} />
         <IconButton aria-label='plus cart' icon={<GoPlus />} colorScheme='teal' onClick={() => addToCart(id)} mr='1rem'/>
         <IconButton aria-label='delete cart item' icon={<FiTrash2 />} colorScheme='red' onClick={() => deleteFromCart(id)} />
      </Box>
      </Box>
    </Box>
  )
}


