import React, {
    useState
} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Center,
    Input,
    IconButton
  } from '@chakra-ui/react'

import {
    AddIcon
} from '@chakra-ui/icons'
import TaskFill from '../TaskFill/TaskFill'
import { getTasks } from '../../../api/Task'

interface Props {
    handleAdd: (newTask: { companyName: string; positionTitle: string; deadlineDate: string }) => void
}

const AddTask:React.FC<Props> = ({handleAdd}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, setFormData] = useState({
        companyName: 'Template',
        positionTitle: 'Template',
        deadlineDate: 'Template'
    })

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const onSubmit = () => {
        try {
            if (!formData['companyName'] || !formData['positionTitle'] || !formData['deadlineDate']){
                alert("Please fill in all credientals")
                return;
            }
            // const rs = getTasks()

            handleAdd(formData)
            setFormData({
                companyName: 'Template',
                positionTitle: 'Template', 
                deadlineDate: 'Template'
            })
            onClose()
        } catch (error) {
            console.error("Error during registration:", error);
        }
      };

    return (
      <>
        <IconButton 
            aria-label='Delete'
            icon={<AddIcon boxSize={'1rem'}/>}
            color={'black'}
            colorScheme='gray'
            size={'md'}
            onClick={onOpen}
            >
        </IconButton>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={'center'}>Add a company to apply to</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <TaskFill onChange={handleChange}/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onSubmit}>
                Add Task
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AddTask