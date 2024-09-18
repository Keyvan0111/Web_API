import React from 'react';
import { 
    Box
} from '@chakra-ui/react'
import AddTask from '../AddTask/AddTask';
interface Props {
    header: string
    headerBg: string
    titleColor: string
    handleAdd: (newTask: { companyName: string; positionTitle: string; deadlineDate: string }) => void;
}

const StatusColHeader:React.FC<Props> = ({header, headerBg, titleColor, handleAdd}) => {
    return (
        <>
            <Box
                padding={'0.3rem'}
                display={'flex'}
                justifyContent={'space-between'}>
                <Box
                    backgroundColor={headerBg}
                    color={titleColor}
                    fontWeight={'bold'}
                    borderRadius='0.5rem'
                    padding='.2rem'
                    paddingLeft={'.5rem'}
                    paddingRight={'.5rem'}
                    >
                    <p>{header}</p>
                </Box>
                <AddTask handleAdd={handleAdd}/>
            </Box>
        </>
    )
}

export default StatusColHeader;