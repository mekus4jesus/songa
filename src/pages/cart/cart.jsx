import { Box, Button, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useShop } from '../../usecontext/usecontext'
import { PRODUCTS } from '../../product'
import { CartItem } from './cart-items'
import { useNavigate } from 'react-router-dom'
import { MdOutlineRemoveShoppingCart } from "react-icons/md"
import { PageWithLoading } from '../../skeleton/pageWithLoading'

export const Carts = () => {
  const { cartItem, getTotalCartAmount } = useShop()
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
 <PageWithLoading>
    <Box bgColor='#ccc'>
      <Box boxShadow='md' padding='1rem' bgColor='white'>
        <Heading> Carts </Heading>
      </Box>
      <Box display='flex' px={12} mt='2rem'>
        {totalAmount > 0 ? (
          <Box width='70%' bgColor='#fff' mr='1.5rem' borderRadius='10px' border='3px solid #ccc' _hover={{ boxShadow: 'lg' }}>
            <Box>
              {PRODUCTS.map((product) => {
                if (cartItem[product.id] !== 0) {
                  return <CartItem key={product.id} data={product} />
                }
              })}
            </Box>
            <VStack>
              <Box fontSize='1.5rem' fontWeight='800'>
                <Text> Subtotal: ₦ {totalAmount} </Text>
              </Box>
              <Box>
                <Button colorScheme='teal' mr='1rem' onClick={() => navigate('/')}> Continue Shopping </Button>
                <Button colorScheme='teal'> Check Out </Button>
              </Box>
            </VStack>
          </Box>
        ) : (
          <VStack width='70%' >
          <Box 
          display='flex'
          flexDirection='column'
          alignItems='center'
          width='400px'
          height='300px'
          justifyContent='center'
          bgColor='#fff'
           mr='1.5rem' 
           borderRadius='10px'
            border='3px solid #ccc'
             _hover={{ boxShadow: 'md' }}>
            <Box>
              <Icon as={MdOutlineRemoveShoppingCart}  boxSize={12} color='red' />
            </Box>
            <Box>
              <Text as='b'> Your Cart is empty</Text>
            </Box>
            <Box>
              <Text>You have not added any item to your cart</Text>
            </Box>
          </Box>
          </VStack>
        )}
        <Box width='30%' bgColor='white' border='2px solid #ccc' height='600px'>
          Advert
        </Box>
      </Box>
    </Box>
   </PageWithLoading>
  )
}
