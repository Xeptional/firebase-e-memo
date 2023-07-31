import { useState } from 'react';
import { Flex, Box, Text, FormControl, FormErrorMessage, FormHelperText, Input, Button, InputGroup, InputRightElement, } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const initialState = {
  staffid: '', 
  password: ''
}

const Auth = () => { // components: {
  //   Button,
  // }

  const [ show, setShow ] = useState(false);
  const showPassword = () => setShow(!show);

  const [ form, setForm ] = useState(initialState);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { staffid, password } = form;
    
  }


  return (
    <Flex bg='#B8E4F2' flexWrap='wrap' flexDirection='column' justifyContent='center' alignItems='center' fontFamily='Roboto' w='100%' minH='100vh' m='auto' pt='10'>
      <Text color='#02456B'  fontSize='3xl' fontWeight='700' mb='10'>E-MEMO MANAGER</Text>
      <Text color='#02456B'  fontSize='xl' mb='5'>Welcome back!</Text>

      <Box bg='#f8f5fa' mb='20' p='5' pt='10' w='60%' h='fit-content' boxShadow='0px 8px 8px 0px #00000040'>
        <form onSubmit={handleSubmit}>
          <Box mb='5' boxShadow='0px 4px 4px 0px #00000040'>
            <FormControl isRequired>
              <Input w='100%' p='2' onChange={handleChange} type='text' placeholder='STAFF ID' name='staffId' variant='outline' border='2px solid #2F80ED' />
            </FormControl>
          </Box>
          <Box mb='5' boxShadow='0px 4px 4px 0px #00000040'>
            <FormControl isRequired>
              <InputGroup>
                <Input w='100%' p='2' onChange={handleChange} pr='4' name='password' type={show ? 'text': 'password'} placeholder='PASSWORD' border='2px solid #2F80ED' />
                <InputRightElement p='2'>{
                  show ? 
                  <ViewOffIcon onClick={showPassword} cursor='pointer' color='#0000004d' boxSize={6} /> : 
                  <ViewIcon onClick={showPassword} cursor='pointer' color='#2F80ED' boxSize={6} />
                }
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Button type='submit' bg='#2F80ED' color='#f8f5fa' width='100%' p='2' mb='5' fontSize='2xl' fontWeight='700'>LOG IN</Button>
          <Flex justifyContent='space-between' mb='5'>
            <Button variant='link' color='#02456B'  fontSize='l' >Forgot password?</Button>
            <Button varient='link' color='#02456B'  fontSize='l' >Getting started</Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

export default Auth;