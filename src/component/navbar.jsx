import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box, Icon, Link, Menu, MenuButton, MenuItem, MenuList, Portal} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LoginForm } from './login';
import { PiShoppingCartThin } from "react-icons/pi";
import { SearchItem } from './searchitem';


const linkStyle = {
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: '700',
  marginRight: '2rem'
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  

  const linkStyleTwo = {
    padding: '2rem 0.5rem',
    ':hover': {
      textDecoration: 'none',
      backgroundColor: 'white',
      color: 'red'
    }
  }
  const modalStlye = {
    fontSize:'0.85',
    ':hover': {
      textDecoration: 'none',
      backgroundColor: 'white',
      color: 'red'
    }
  }

 

  return (
    <Box>
     <Box bg='#ED017F' w='100%' color='white' display='flex' alignItems='center' position="relative" p='1rem'>
        <Box>
          <Link as={RouterLink} to='/' style={linkStyle}>😉Songa</Link>
          <Link as={RouterLink} to='/store-locator' sx={linkStyleTwo}>Store Locator</Link>
          <Link as={RouterLink} to='/sell-product' sx={linkStyleTwo}>Sell on Songa</Link>
        </Box>
        <Box >
        <SearchItem 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
         />
        </Box>
        <Box
         position='absolute'
         right='21%'
          marginLeft='0.3rem'
          >
          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
            <Box onMouseEnter={() => setIsMenuOpen(true)}
             onMouseLeave={() => setIsMenuOpen(false)} border='10px solid transparent'  _hover={{backgroundColor: 'white', color: 'red'}}>
              <MenuButton marginLeft='-1rem' variant='outline' padding='0.7rem' > ?  Help <TriangleDownIcon color='white' _hover={{color:'red'}} /> </MenuButton>
              <Portal> 
              <MenuList
              display={isMenuOpen ? 'block' : 'none'}
              marginLeft='0.3rem'
              >
                <MenuItem >FAQs</MenuItem>
                <MenuItem>Contact Us</MenuItem>
                <MenuItem>Track My Order</MenuItem>
                <MenuItem>Songa Return Policy</MenuItem>
              </MenuList>
            </Portal>
            </Box>
          </Menu>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'  position='absolute'
         right='13%'>
        <Box sx={modalStlye}>
          <LoginForm />
        </Box>
        </Box>
        <Box bgColor='teal' padding='0.6rem 2rem'  position='absolute'
         right='1%'>
         <Link as={RouterLink} to='/cart' _hover={{textDecoration:'none'}}><Icon as={PiShoppingCartThin} fontSize='1.3rem'/> My Cart </Link>
        </Box>
      </Box>
      <Box bg='#AE3272' w='100%' p={3} color='white'  top="100%">
        <Box>
          <Link as={RouterLink} to='/hello'>All categories</Link>
        </Box>
      </Box>
         <Box>
        </Box>
    </Box>
  );
}
