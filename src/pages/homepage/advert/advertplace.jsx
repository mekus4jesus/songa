import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Advert } from '../../../advert'

export const Advertplace = () => {
  return (
    <Box boxSize='sm' display='grid' gridTemplateColumns='repeat(2,1fr)' gap={4}>
      {Advert.map((advert) => (
        <Image src={advert.advertImage} borderRadius='10px' />
      ))}
    </Box>
  )
}


