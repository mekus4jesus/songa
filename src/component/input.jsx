import { Input } from "@chakra-ui/react";
export const MyInput =(props)  =>{
  return (
    <Input
      {...props}
      focusBorderColor="none" // This removes the green line on focus
     
    />
  )
}

