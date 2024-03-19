import { Box} from '@chakra-ui/react'
import { Autoslide } from './slider/autoslide'
import { Advertplace } from './advert/advertplace'


export const HomeFirstSection = () => {
  return (
  
      <Box display='flex' mt='2rem' px={8}>
        <Autoslide />
        <Advertplace />
      </Box>
  )
}


