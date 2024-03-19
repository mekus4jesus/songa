import { Box, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

export const SkeletonLoading = () => {
  return (
    <Flex padding='6' bg='white' mt='4' maxHeight='100vh'>
      {/* First Section */}
      <Box flex='1' marginRight='4'>
        <Skeleton height='250px' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>

      {/* Second Section */}
      <Box flex='1' marginRight='4'>
        <Skeleton height='250px' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>

      {/* Third Section */}
      <Box flex='1'>
        <Skeleton height='250px' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </Flex>
  );
};
