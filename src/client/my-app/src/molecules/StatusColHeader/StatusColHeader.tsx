import React from 'react';
import { 
    Box,
    IconButton
} from '@chakra-ui/react'
import { 
    AddIcon
} from '@chakra-ui/icons'

interface Props {
    header: string
    headerBg: string
    titleColor: string
    handleAdd: () => void
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
        </>
    )
}

export default StatusColHeader;