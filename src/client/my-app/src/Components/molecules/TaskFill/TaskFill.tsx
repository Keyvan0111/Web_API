import React, {
    useState
} from 'react'
import {
    Text,
    Input,
    Box,
    Center
} from '@chakra-ui/react'


interface Props {
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}



const TaskFill:React.FC<Props> = ({onChange}) => {


  return (
    <>
        <Box
        display={'flex'}
        flexDir={'column'}
        gap={'1rem'}>
            <Box>
                <Text>Company</Text>
                <Input 
                    name='companyName'
                    variant='flushed'
                    placeholder='Company name'
                    onChange={onChange}></Input>
            </Box>

            <Box>
                <Text>Job position</Text>
                <Input 
                    name='positionTitle'
                    variant='flushed'
                    placeholder='Job title'
                    onChange={onChange}></Input>
            </Box>
            

            <Box>
                <Text>Deadline</Text>
                <Input 
                    type='date'
                    name='deadlineDate' 
                    variant='flushed' 
                    placeholder='dd-mm-yyyy' 
                    onChange={onChange}></Input>
            </Box>
        </Box>
    </>
  )
}

export default TaskFill;