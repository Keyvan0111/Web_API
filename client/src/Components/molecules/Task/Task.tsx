import React from 'react';
import { useState } from 'react';

import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
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
    DeleteIcon,
    EditIcon
} from '@chakra-ui/icons';
import EditModal from '../editModal/editModal';


interface TaskProp {
    companyName: string
    positionTitle: string
    deadlineDate: string
}

interface Props {
    content : {
        companyName:string;
        positionTitle:string;
        deadlineDate:string;
    }
    index:number;
    onRemove: () => void;
    onEdit: (updatedTask:TaskProp) => void;
}



const Task: React.FC<Props> = ({ content, index, onRemove, onEdit }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const editTask = (updatedTask: TaskProp) => {
        onEdit(updatedTask); // Call the passed onEdit function
        onClose(); // Close the modal after editing
      };
    return (
        <>
        <Card position={'relative'} direction={{ base: 'column', sm: 'row' } } onClick={onOpen}>
            <Box position={'absolute'} right={'0.3rem'} top={'0.3rem'} padding={'0.2rem'}>
                <Box display={'flex'} gap={'0.2rem'}>
                    <IconButton
                        aria-label="Delete"
                        icon={<DeleteIcon />}
                        variant="solid"
                        colorScheme="blue" 
                        onClick={onRemove}
                    />
                    <EditModal initialFormData={content} editTask={editTask}/>
                </Box>
            </Box>

            <Stack>
                <CardBody>
                    <Text fontSize={'1.5rem'} fontWeight={'bold'}>{content['companyName']}</Text>
                    <Text fontSize={'1rem'}>{content['positionTitle']}</Text>
                    <Text fontSize={'1rem'}>{content['deadlineDate']}</Text>
                </CardBody>
            </Stack>
        </Card>
      </>
    )
}

export default Task;
