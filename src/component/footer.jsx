import { AbsoluteCenter, Box, Divider, Heading, Icon, Input, InputGroup, InputRightAddon, List, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { FaFacebookF, FaYoutube } from "react-icons/fa"
import { RiTwitterFill, RiWhatsappLine } from "react-icons/ri"
import { BsApple, BsAndroid2, BsInstagram  } from "react-icons/bs";


export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Box>
      <Box bgColor='#2E2E2E' p={2} display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center'>
          <Box borderRadius='50%' p='5px' bgColor='white'  w='30px' h='30px' >
            <Icon as={MdEmail } />
          </Box>
          <Box color='white' ml='0.5rem'>
            <Text as='b'> Email Support </Text>
            <Text> help@Songa.com</Text>
          </Box>
        </Box>
        <Box display='flex' alignItems='center'>
          <Box borderRadius='50%' p='5px' bgColor='white'  w='30px' h='30px' ml='1rem'>
            <Icon as={FaPhone } />
          </Box>
          <Box color='white' ml='0.5rem'>
            <Text as='b'> Phone Support </Text>
            <Text mt='0.4rem'> +23408030000000,+23409030000000</Text>
          </Box>
        </Box>
        <Box display='flex' alignItems='center'>
          <Box borderRadius='50%' p='5px' bgColor='white'  w='30px' h='30px' ml='1rem'>
            <Icon as={RiWhatsappLine } />
          </Box>
          <Box color='white' ml='0.5rem'>
            <Text as='b'> WHATSAPP </Text>
            <Text> +23408030000000,+23409030000000</Text>
          </Box>
        </Box>
        <Box>
          <Box color='white' ml='1rem' mt='1rem'>
            <Text as='b'> Get the Latest Deal </Text>
            <Text> Our best promotions sent to your inbox</Text>
          </Box>
        </Box>
        <Box ml='1rem' mt='1rem'>
          <InputGroup>
            <Input  bgColor='white' placeholder='Email Address'/>
            <InputRightAddon bg='#ED017F' outline='none'>
             Subscribe
            </InputRightAddon>
          </InputGroup>
          </Box>
      </Box>
      <Box display='flex' justifyContent='space-between' bg='#0C0C0C' px={8}>
         <Box mt='2rem'>
          <Heading as='h5' size='sm' color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> ABOUT SONGA </Heading>
          <UnorderedList listStyleType='none' mt='1rem' ml='-0.2rem'>
            <List spacing={2} fontSize='0.8rem'>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> Cotact us </ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> About us</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> Careers</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Our Blog</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Forum</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Terms and Conditions</ListItem>
            </List>
          </UnorderedList>
         </Box>
         <Box mt='2rem'>
         <Heading as='h5' size='sm' color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> PAYMENT </Heading>
          <UnorderedList listStyleType='none' mt='1rem' ml='-0.2rem'>
            <List spacing={2} fontSize='0.8rem'>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>SongaPay</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Wallet</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> Verve</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Mastercard</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Visa</ListItem>
            </List>
          </UnorderedList>
         </Box>
         <Box mt='2rem'>
         <Heading as='h5' size='sm' color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> PAYMENT </Heading>
          <UnorderedList listStyleType='none' mt='1rem' ml='-0.2rem'>
            <List spacing={2} fontSize='0.8rem'>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>SongaPay</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Wallet</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> Verve</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Mastercard</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Visa</ListItem>
            </List>
          </UnorderedList>
         </Box>
         <Box mt='2rem'>
         <Heading as='h5' size='sm' color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> MORE INFO</Heading>
          <UnorderedList listStyleType='none' mt='1rem' ml='-0.2rem'>
            <List spacing={2} fontSize='0.8rem'>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Site Map</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Track My Order</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> Privacy Policy</ListItem>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Authentic Items Policy</ListItem>
            </List>
          </UnorderedList>
         </Box>
         <Box mt='2rem'>
         <Heading as='h5' size='sm' color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'> MAKE MONEY ON SONGA</Heading>
          <UnorderedList listStyleType='none' mt='1rem' ml='-0.2rem'>
            <List spacing={2} fontSize='0.8rem'>
              <ListItem color='#b5b5b5' _hover={{color:'#fff'}} cursor='pointer'>Become a Songa Affiliate</ListItem>
            </List>
          </UnorderedList>
         </Box>
         <Box mt='2rem' color='#fff'>
         <Heading as='h5' size='sm' color='#b5b5b5'> DOWNLOAD & CONNECT WITH US
         </Heading>
         <Box display='flex'>
           <Box display='flex' alignItems='center' mt='1rem' mr='1rem'>
             <Box>
              <Icon as={BsApple} w='30px' h='30px' mr='0.5rem' />
             </Box>
             <Box>
              <Text color='#b5b5b5'>Download on</Text>
              <Text color='#b5b5b5' mt='-0.3rem'> App Store</Text>
             </Box>
           </Box>
           <Box display='flex' alignItems='center' mt='1rem'>
           <Box>
              <Icon as={BsAndroid2} w='30px' h='30px' mr='0.5rem' />
             </Box>
             <Box>
              <Text color='#b5b5b5'>Download on</Text>
              <Text color='#b5b5b5' mt='-0.3rem'> Google Play</Text>
             </Box>
           </Box>
         </Box>
          <Box mt='2rem'>
           <Box>
           <Heading as='h5' size='sm' color='#b5b5b5'> CONNECT WITH US
         </Heading>
           </Box>
           <Box display='flex' mt='1.5rem' mb='3rem'>
           <Box mr='1rem' w='40px' h='40px' borderRadius='50%' bgColor='#2E2E2E' >
              <Icon as={FaFacebookF} boxSize={6} m='0.5rem' />
            </Box>
            <Box mr='1rem' w='40px' h='40px' borderRadius='50%' bgColor='#2E2E2E' >
            <Icon as={RiTwitterFill} boxSize={6}  m='0.5rem'/>
            </Box>
            <Box mr='1rem' w='40px' h='40px' borderRadius='50%' bgColor='#2E2E2E' >
            <Icon as={BsInstagram} boxSize={6} m='0.5rem' />
            </Box>
            <Box mr='1rem' w='40px' h='40px' borderRadius='50%' bgColor='#2E2E2E'>
            <Icon as={FaYoutube} boxSize={6} m='0.5rem' /> 
            </Box>
           </Box>
          </Box>
         </Box>
      </Box>
      <Box bgColor='#0C0C0C'>
        <Box position='relative' padding='10' width='100%'>
        <Divider orientation='horizontal' />
        <AbsoluteCenter color='white' px='8'>>
        Copyright © {date} songa.com. All rights reserved
        </AbsoluteCenter>
      </Box>
      </Box>
    </Box>
  )
}


