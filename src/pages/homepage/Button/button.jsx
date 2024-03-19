import { ChatIcon, CopyIcon, DragHandleIcon, ExternalLinkIcon, NotAllowedIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { Box, Button, HStack } from "@chakra-ui/react"


export const ButtonApp = () => {
  return (
    <Box mt='1rem' px={8}>
      <HStack>
       <Button colorScheme='teal' variant='outline' leftIcon={<ChatIcon />} size='lg' p='1.8rem 3rem'> Songa Blog</Button>
       <Button colorScheme='teal' variant='outline' leftIcon={<SmallCloseIcon />} size='lg' p='1.8rem 3rem'> Pay Bill</Button>
       <Button colorScheme='teal' variant='outline' leftIcon={<NotAllowedIcon />} size='lg' p='1.8rem 3rem'> offline Stote</Button>
       <Button colorScheme='teal' variant='outline' leftIcon={<DragHandleIcon />} size='lg' p='1.8rem 3rem'>Brand Store</Button>
       <Button colorScheme='teal' variant='outline' leftIcon={<ExternalLinkIcon />} size='lg' p='1.8rem 3rem'> Book Flight</Button>
       <Button colorScheme='teal' variant='outline' leftIcon={<CopyIcon />} size='lg' p='1.8rem 3rem'> Watch SongaTv</Button>
       </HStack>
    </Box>
  )
}


