import { Box } from '@chakra-ui/react'
import { HomeFirstSection } from './home-first'
import { ButtonApp } from './Button/button'
import { HomeMainSection } from './home-main'
import { PageWithLoading } from '../../skeleton/pageWithLoading'

export const Home = () => {
  
  return (
    <PageWithLoading>
        <Box>
          <HomeFirstSection />
          <ButtonApp  />
          <HomeMainSection />
        </Box>
    </PageWithLoading>
  )
}


