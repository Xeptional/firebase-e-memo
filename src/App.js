import { ChakraProvider } from '@chakra-ui/react';
// import { ChakraTheme } from '@chakra-ui/react';
import { Auth, Arrivals } from './components/';

import './App.css';

// const { Button } = ChakraTheme.components;

const colors = {
  transparent: 'transparent',
  white: '#f8f5fa',
  black: '#02456B',
  grey: {
    100: '#C5C4C4',
    50: 'rgba(0, 0, 0, 0.06)'
  }, 
  blue: {
    100: '#02456B',
    50: '#2F80ED'
  },
}

// const fonts = {
//   heading: 
// };


// const theme = extendBaseTheme({
//   colors,
//   // components: {
//   //   Button,
//   // }
// })

function App() {
  return (
    <ChakraProvider>
      <Auth />
    </ChakraProvider>
  );
}

export default App;
