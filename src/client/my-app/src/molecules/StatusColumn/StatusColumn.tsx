import React, { useEffect, useState} from 'react'
import { 
    chakra, 
    Box,
    Stack,
    Card,
    IconButton,
} from '@chakra-ui/react'
import { 
    CloseIcon,
    DeleteIcon,
    AddIcon,
    CheckIcon,
    TimeIcon,
} from '@chakra-ui/icons';
import Task from '../Task/Task'
import { error } from 'console';

interface Props {
    header:string,
    headerBg:string,
}

const StatusColumn: React.FC<Props> = ({
    header,
    headerBg
}) => {

    const [todos, setTodos] = useState<string[]>([])
    const [ongoings, setOngoings] = useState<string[]>([])
    const [done, setDone] = useState<string[]>([])

    const handleAdd = () => {
        const newTask = 'hello'
        setTodos(prevTask => [...prevTask, newTask])
    }

    const removeTask = (taskIndex: number) => {
        setTodos(prevTasks => prevTasks.filter((_, index) => index !== taskIndex));
    }

    // useEffect(() => {
    //     const prevtasks = localStorage.getItem('tasks')

    //     if (prevtasks) {
    //         try {
    //             setTasks(JSON.parse(prevtasks))
    //         } catch (error) {
    //             console.error('Failed to parse tasks from localStorage', error);
    //         }
    //     }
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }, [tasks]);

    

    return (
        <>
            <Box
            width='100%'
            color="black"
            fontSize={'1.2rem'}
            >   
                <Box
                    padding={'0.3rem'}
                    display={'flex'}
                    justifyContent={'space-between'}>
                    <Box
                        backgroundColor={headerBg}
                        borderRadius='0.5rem'
                        padding='.2rem'
                        paddingLeft={'.5rem'}
                        paddingRight={'.5rem'}
                        >
                        <p>{header}</p>
                    </Box>
                    <IconButton 
                        aria-label='Delete'
                        icon={<AddIcon boxSize={'1rem'}/>}
                        color={'black'}
                        colorScheme='gray'
                        size={'sm'}
                        onClick={handleAdd}
                        >

                    </IconButton>
                </Box>
                <Box
                    borderRadius={'0.5rem'}
                    w={'100%'}
                    h={'100%'}
                    bgColor={'#EAEEF0'}
                    padding={'5px'}
                    overflow={'hidden'}
                    overflowY= {'scroll'}
                    >
                    <Stack>
                        {todos.map((task, index) => (
                            <Task 
                            onRemove={() => removeTask(index)}
                            key={index}
                            body={task}/>
                        ))}
                    </Stack>
                </Box>

            </Box>
        </>
    )
}



export default StatusColumn;