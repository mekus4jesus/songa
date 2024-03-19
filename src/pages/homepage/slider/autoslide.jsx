import { Box, Heading, IconButton, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide';
import { PRODUCTS } from '../../../product';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export const Autoslide = () => {
  const glideRef = useRef(null);
  const [glideInstance, setGlideInstance] = useState(null);

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      autoplay: 3000,
      gap: 0,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: 'linear',
    });

    setGlideInstance(glide);
    glide.mount();

    return () => glide.destroy();
  }, []);

  const handlePrev = () => {
    if (glideInstance) {
      glideInstance.go('<');
    }
  };

  const handleNext = () => {
    if (glideInstance) {
      glideInstance.go('>');
    }
  };

  const handleBulletClick = (index) => {
    if (glideInstance) {
      glideInstance.go(`=${index}`);
    }
  };

  return (
    <Box position="relative"  width="70%" mr='1rem'>
      <div className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {PRODUCTS.map((product) => (
              <li key={product.id} className="glide__slide">
                <Box
                  objectFit="cover"
                  bgColor="#60EAD2"
                  borderRadius="10px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  px={12}
                  position="relative"
                >
                  <Heading as="h1" color="white">
                    {product.productName}
                  </Heading>
                  <Image boxSize="sm" src={product.productImage} alt={product.productName} />
                </Box>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {PRODUCTS.map((_, index) => (
            <button
              key={index}
              className="glide__bullet"
              onClick={() => handleBulletClick(index)}
              data-glide-dir={`=${index}`}
            />
          ))}
        </div>
      </div>
      <Box>
        <Box position="absolute" top="50%" left="5px" transform="translateY(-50%)" zIndex="1">
          <IconButton onClick={handlePrev} aria-label="prev" icon={<ArrowLeftIcon />} />
        </Box>
        <Box position="absolute" top="50%" right="5px" transform="translateY(-50%)" zIndex="1">
          <IconButton onClick={handleNext} aria-label="next" icon={<ArrowRightIcon />} />
        </Box>
      </Box>
    </Box>
  );
};
