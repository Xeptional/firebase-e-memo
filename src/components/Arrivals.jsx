import { useState } from 'react';
import { Box, Text, } from '@chakra-ui/react';
import Header from './Header';
import MemoList from './MemoList';

const Arrivals = () => {
  return (
    <>
      <Header title='ARRIVALS'/>
      <MemoList />
    </>
  )
}

export default Arrivals;