import { useState } from 'react';
import Header from './Header';
import { Flex, Box, Text, FormControl, FormErrorMessage, FormHelperText, Input, Textarea, Select, Button, InputGroup, InputRightElement, } from '@chakra-ui/react';

const AddNew = () => {
  return (
    <>
      <Header title="ADD NEW"/>
      <Box w='40%' ml='5%' mt='10' mb='50'>
        <form>
          <FormControl mb='5'>
            <Input type='text' borderBottom={'1px solid #02456B'} bg='#00000020' placeholder='From' />
          </FormControl>
          <FormControl mb='5'>
            <Input type='text' borderBottom={'1px solid #02456B'} bg='#00000020' placeholder='To' />
          </FormControl>
          <FormControl mb='5'>
            <Textarea size='md' borderBottom={'1px solid #02456B'} bg='#00000020' placeholder='Title' />
          </FormControl>
          <FormControl mb='5'>
            <Textarea size='md' borderBottom={'1px solid #02456B'} bg='#00000020' placeholder='Details' />
          </FormControl>
          <Flex justifyContent='space-between' mb='10' alignItems='center'>
            <FormControl w='40%'>
              <Select size='md' borderBottom={'1px solid #02456B'} bg='#00000020' placeholder='Status'>
                <option value='Pending'>Pending</option>
                <option value='Urgent'>Urgent</option>
                <option value='Complete'>Complete</option>
              </Select>
            </FormControl>
            <FormControl w='auto'>
              <Button colorScheme='blackAlpha'>Upload file</Button>
            </FormControl>
          </Flex>
          <FormControl display='flex' justifyContent='flex-end'>
            <Button as='submit' size='lg' colorScheme='blue'>Submit</Button>
          </FormControl>
        </form>
      </Box>
    </>
  )

}

export default AddNew;