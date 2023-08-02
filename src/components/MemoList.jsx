import { useState } from 'react';
import { Box, Flex, Text, Input, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, TableContainer, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ViewIcon, EditIcon, AttachmentIcon } from '@chakra-ui/icons';

const memos = [
  {
    number: 1,
    title: "Student Industrial Work Experience Scheme",
    from: "Director, ITCC",
    to: 'Director, ITeMS',
    date: '01/03/2023',
    logDate: '01/07/2023',
    status: 'URGENT'
  },
  {
    number: 2,
    title: "Staff Training",
    from: "Director, ITeMS",
    to: 'Vice Chancellor',
    date: '01/03/2023',
    logDate: '01/07/2023',
    status: 'PENDING'
  },
  {
    number: 3,
    title: "Construction of Laboratory",
    from: "Deputy Vice Chancellor",
    to: 'Dean, Faculty of Science',
    date: '01/03/2023',
    logDate: '01/07/2023',
    status: 'PENDING'
  },
  {
    number: 4,
    title: "Closure of Hostels",
    from: "Dean, Student Affairs",
    to: 'Hostel Warden',
    date: '01/03/2023',
    logDate: '01/07/2023',
    status: 'URGENT'
  },
  {
    number: 5,
    title: "Convocation Ceremony",
    from: "Vice Chancellor",
    to: 'Director, ITeMS',
    date: '01/03/2023',
    logDate: '01/07/2023',
    status: 'PENDING'
  },
]

const statusColor = (status) => {
  switch(status) {
    case 'PENDING': return '#f2994a'
    case 'URGENT': return '#ff0000'
    case 'TREATED': return '#27AE60' 
    default:
  };
} 


const MemoList = () => {

  return (
    <>
      <Flex justifyContent='flex-end' alignItems='center' w='90%' m='auto' py='2' color='#828282'>
        <Text fontFamily='Roboto' mr='5'>Rows per page</Text>
        
        <NumberInput mr='5' size='sm' maxW={16} step={5} default={10} min={5} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        
        <Text fontFamily='Roboto' mr='5'>1 - 10 of 50</Text>

        <Box pr='20'>
          <ChevronLeftIcon boxSize={7} cursor='pointer'/>
          <ChevronRightIcon boxSize={7} cursor='pointer'/>
        </Box>

        <Input variant='flushed' size='sm' htmlSize={20} width='auto' borderBottom='1px solid #C5C4C4' placeholder='Search Data'/>
      </Flex>

      <TableContainer w='90%' m='auto' mb='20'>
        <Table fontFamily='Roboto' >
          <Thead>
            <Tr>
              <Th color='#020202' fontSize='md'>M/No</Th>
              <Th color='#020202' fontSize='md'>Title</Th>
              <Th color='#020202' fontSize='md'>From</Th>
              <Th color='#020202' fontSize='md'>To</Th>
              <Th color='#020202' fontSize='md'>Date</Th>
              <Th color='#020202' fontSize='md'>Logged Date</Th>
              <Th color='#020202' fontSize='md'>Status</Th>
              <Th color='#020202' fontSize='md'>Actions</Th>
            </Tr>
          </Thead>
          <Tbody color='#828282'>
            {memos.map(({ number, title, from, to, date, logDate, status }, index) => {
              return (
                <Tr key={index}>
                  <Td>{number}</Td>
                  <Td>{title}</Td>
                  <Td>{from}</Td>
                  <Td>{to}</Td>
                  <Td>{date}</Td>
                  <Td>{logDate}</Td>
                  <Td>
                    <Box bg={statusColor(status)} p='1' borderRadius='md' fontWeight='bold' color='#f8f5fa'>
                      {status}
                    </Box>
                  </Td>
                  <Td>
                    <Flex justifyContent='space-between' color='#2F80ED'>
                      <ViewIcon cursor='pointer'/>
                      <EditIcon cursor='pointer'/>
                      <AttachmentIcon cursor='pointer'/>
                    </Flex>
                  </Td>
              </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MemoList;