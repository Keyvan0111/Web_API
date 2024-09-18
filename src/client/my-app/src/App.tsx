import React from 'react';
import Mainpage from './Components/pages/mainpage'
import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC = () => {

    return(
        <ChakraProvider>
            <Mainpage/>
        </ChakraProvider>
    )
}

export default App;