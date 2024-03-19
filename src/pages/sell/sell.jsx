import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { PageWithLoading } from '../../skeleton/pageWithLoading'

export const Sell = () => {
  return (
    <>
    <PageWithLoading>
    <Box mt='3rem' maxH='100vh'>
      <Heading as='h1'> Sell Product.... </Heading>
    </Box>
    </PageWithLoading>
    </>
  )
}


