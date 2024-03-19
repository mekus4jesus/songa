import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Box,
  Icon,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

const navigate = useNavigate()
  const initialValues = {
    emailOrPhone: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string()
      .required('Email or phone number is required')
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, 'Invalid email address or phone number')
      .matches(/^[0-9]+$/, 'Invalid email address or phone number'),
    password: Yup.string().required('Password is required'),
  });
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const emailOrPhoneRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignUpClick = () => {
    onClose();
    navigate('/signup');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(formik) => (
        <>
          <Box onClick={onOpen} display='flex' flexDirection='column' padding='0.6rem 1rem'>
          <Button  colorScheme="white" variant="ghost" >
            Login/ 
          </Button>
          <Button  colorScheme="white" variant="ghost"  mt='-1.5rem'>
            Sign up 
          </Button>
          </Box>
          <Modal
            initialFocusRef={emailOrPhoneRef}
            isOpen={isOpen}
            onClose={onClose}
              >
            <ModalOverlay />
            <ModalContent>
            <Box boxShadow="md" mb='1rem'> {/* Box with shadow */}
                <ModalHeader>Login</ModalHeader>
              </Box>
              <ModalCloseButton /> 
              <Form py={8}>
                <ModalBody pb={6}>
                  <Field name="emailOrPhone">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.emailOrPhone && form.touched.emailOrPhone}>
                        <FormLabel htmlFor="emailOrPhone">Email or Phone Number</FormLabel>
                        <Input {...field} type="text" placeholder="Email or Phone Number" ref={emailOrPhoneRef} />
                        <FormErrorMessage>{form.errors.emailOrPhone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.password && form.touched.password} mt={4}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                          />
                          <InputRightElement width="4.5rem">
                            <IconButton
                              h="1.75rem"
                              size="sm"
                              onClick={togglePasswordVisibility}
                              aria-label={showPassword ? 'Hide password' : 'Show password'}
                              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                              backgroundColor="transparent"
                              _hover={{ backgroundColor:"transparent"}}
                            />
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </ModalBody>
                <ModalFooter mb='1rem'>
                  <Button
                   position="relative"
                    colorScheme="teal"
                    isLoading={formik.isSubmitting}
                    type="submit"
                    onClick={formik.handleSubmit}
                    width='100%'
                  >
                    Login
                  </Button>
                </ModalFooter>
                <Box  position='relative' width="100%">
                 <Divider border='0.1px solid #ccc' />
                 <Box
                      position="absolute"
                      top="1.8%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      borderRadius="50%"
                      border='0.1px solid #ccc'
                      backgroundColor="white"
                      padding="0.5rem"
                      fontSize="sm"
                    >
                      OR
                    </Box>
                    <Box>
                      <Button
                      colorScheme='teal'
                       variant='outline'
                       mt='3rem' 
                       ml='1rem'> 
                        <Icon  as={FcGoogle}  mr='1rem' size='2x' />
                        Login with Google
                      </Button>
                      <Button
                      colorScheme='teal'
                       variant='outline'
                       mt='3rem'> 
                        <Icon  as={FaApple}  mr='1rem' size='2x' />
                        Login with Apple
                      </Button>
                    </Box>
                    <Box bgColor='#ccc' mt='3rem' textAlign='center' p='1rem'>
                      Don't have an account ?
                      <Button 
                      mt='-0.5rem' 
                      colorScheme="red" 
                      variant="ghost"
                      _hover={{bgColor:'transparent'}}
                      onClick={handleSignUpClick}
                       >
                         Sign Up
                    </Button>
                    </Box>
                   </Box>
              </Form>
            </ModalContent>
          </Modal>
        </>
      )}
    </Formik>
  )
}
