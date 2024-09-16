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
    content : {
        companyName:string;
        positionTitle:string;
        deadlineDate:string;
    }
    index:number;
    onRemove: () => void;
}

const Task:React.FC<Props> = ({content, index, onRemove}) => {

    return (
        <>
        <Card position={'relative'} direction={{ base: 'column', sm: 'row' }} >
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
                    <Text fontSize={'1rem'}>{content['companyName']}</Text>
                    <Text fontSize={'1rem'}>{content['positionTitle']}</Text>
                    <Text fontSize={'1rem'}>{content['deadlineDate']}</Text>
                </CardBody>
            </Stack>
        </Card>
      </>
    )
}

export default Task;
