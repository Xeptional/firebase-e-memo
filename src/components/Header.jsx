import { useState } from 'react';
import { Flex, Box, HStack, Link, Text, Image, Menu, MenuButton, IconButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

const Header = ({ title }) => {

  return (
    <>
    <Flex justifyContent='space-between' px='10' py='3' bg='#02456B' color='#f8f5fa' fontFamily='Roboto'>
      <Text fontSize='2xl'>E-MEMO MANAGER</Text>
      <Flex alignItems='center'> 
        <Image mr='2' borderRadius='full'boxSize='40px'src='https://bit.ly/dan-abramov'alt='Dan Abramov' />
        <Menu>
          <MenuButton aria-label='log out' bg='inherit' color='#f8f5fa' as={IconButton} icon={<TriangleDownIcon />}  />
          <MenuList>
            <MenuItem color='#02456B' >Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>

    <Box bg='#C5C4C4' pl='5' py='1' color='#02456B'>
      <HStack as='nav' spacing='1'>
        <Link>
          <Button variant='nav'>Arrivals</Button>
        </Link>
        <Link>
          <Button variant='nav'>Add New</Button>
        </Link>
        <Link>
          <Button variant='nav'>Re-assigned</Button>
        </Link>
        <Link>
          <Button variant='nav'>Resolved</Button>
        </Link>
      </HStack>
    </Box>

    <Flex justifyContent='space-between' w='90%' m='auto' pb='3' mt='10' borderBottom={'1px solid #C5C4C4'}>
      <Text fontSize='xl' color='#02456B' fontFamily='Roboto' fontWeight='700'>{title}</Text>
      <Button variant='link' color='#2F80ED' fontSize='md'>Add New Memo</Button>
    </Flex>
    </>
  )
};

export default Header;