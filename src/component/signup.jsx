import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  VStack,
  InputGroup,
  InputRightElement,
  IconButton,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { Link  } from 'react-router-dom';
import { PageWithLoading } from '../skeleton/pageWithLoading';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Your First Name is required'),
    lastName: Yup.string().required('Your Last Name is required'),
    email: Yup.string().email('Invalid Email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required'),
    password: Yup.string().required('Password is required'),
  });

  const firstnameRef = useRef(null);

  return (
     <PageWithLoading>
      <Box backgroundColor='#ccc' display='flex' flexDirection='column' alignItems='center'   h='100vh' overflowY='auto'>
       <VStack>
        <Box  p='2rem'>
          <Box mb='3rem' textAlign='center' fontSize='2rem' color='red' fontWeight='700'>
          <Link  to='/' >😉Songa</Link>
          </Box>
          <Box backgroundColor='#fff' boxShadow='lg' borderRadius='14px' w='450px'>
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
                <Box>
                  <Button colorScheme="white" variant="ghost" fontSize='2rem' mb='1.6rem' boxShadow='md' p='2rem' width='100%'>
                    Create an Account
                  </Button>
                    <Box px={4}>
                      <Form>
                          <Box>
                            <FormLabel htmlFor="firstName">First Name </FormLabel>
                          <Field name="firstName">
                            {({ field, form }) => (
                              <FormControl isInvalid={form.errors.firstName && form.touched.firstName} mt={2}>
                                <Input {...field}  placeholder="First Name" ref={firstnameRef} />
                                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          </Box>
                          <Box mt={2}>
                            <FormLabel htmlFor="lastName">Last Name </FormLabel>
                          <Field name="lastName">
                            {({ field, form }) => (
                              <FormControl isInvalid={form.errors.lastName && form.touched.lastName} mt={2}>
                                <Input {...field}  placeholder="Last Name"/>
                                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          </Box>
                          <Box mt={2}>
                            <FormLabel htmlFor="email">Email </FormLabel>
                          <Field name="email">
                            {({ field, form }) => (
                              <FormControl isInvalid={form.errors.email && form.touched.email} mt={2}>
                                <Input {...field} type="email" placeholder="Email"/>
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          </Box>
                          <Box mt={2}>
                            <FormLabel htmlFor="phoneNumber">Phone Number </FormLabel>
                          <Field name="phoneNumber">
                            {({ field, form }) => (
                              <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber} mt={2}>
                                <Input {...field} type="number" placeholder="Phone Number"/>
                                <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          </Box>
                          <Box mt={2}>
                            <FormLabel htmlFor='password'> Password</FormLabel>
                          <Field name="password">
                            {({ field, form }) => (
                              <FormControl isInvalid={form.errors.password && form.touched.password} mt={2}>
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
                          </Box>
                          <Button
                            mt={4}
                            mb={4}
                            width='100%'
                            colorScheme="teal"
                            isLoading={formik.isSubmitting}
                            type="submit"
                            onClick={formik.handleSubmit}
                          >
                            Create an Account
                          </Button>
                      </Form>
                    </Box>
                </Box>
              )}
            </Formik>
            <Box px={4} textAlign='center' fontSize='0.9rem' opacity='0.5'>
            <Text>By signing up you accept our terms and Conditions<br /> & privacy policy</Text>
          </Box>
          <Box mt='2rem' bgColor='#ccc' p='1.2rem'>
            <Text textAlign='center' >Already have an account?</Text>
            <Box>
            <Button colorScheme='red' variant='outline' w='100%' mt={2}  fontWeight='600' _hover={{bgColor:'red', color:'white', border:'none'}}>
                   Login
            </Button>
            </Box>
          </Box>
          </Box>
        </Box>
       </VStack>
    </Box>
    </PageWithLoading>
  )
}