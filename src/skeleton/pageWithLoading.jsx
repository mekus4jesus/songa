import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SkeletonLoading } from './skeleton-loading';

export const PageWithLoading = ({ children}) => {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

 

  return (
    <Box>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <Box>
          {children}
        </Box>
      )}
    </Box>
  );
};


