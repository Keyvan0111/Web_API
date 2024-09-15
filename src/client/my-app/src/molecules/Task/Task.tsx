import React from 'react';
import { useState } from 'react';
import { 
    Card, 
    Box,
    CardHeader, 
    CardBody, 
    CardFooter,
    Text,
    ButtonGroup,
    Button,
    Stack,
    IconButton
} from '@chakra-ui/react'
import { 
    CloseIcon,
    DeleteIcon
} from '@chakra-ui/icons';


interface Props {
    // header : { // adding header for searching jobs
    //     title:string;
    //     company:string;
    //     deadline:string;
    // }
    body:string;
    onRemove: () => void;
}

const Task:React.FC<Props> = ({body, onRemove}) => {

    return (
        <>
        <Card position={'relative'} direction={{ base: 'column', sm: 'row' }}>
            <Box position={'absolute'} right={'0.3rem'} top={'0.3rem'}>
                <IconButton
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                    variant="solid"
                    colorScheme="blue" 
                    onClick={onRemove}
                />
            </Box>

            <Stack>
                <CardBody>
                    <Text fontSize={'1rem'}>{body}</Text>
                </CardBody>
            </Stack>
        </Card>
      </>
    )
}

export default Task;