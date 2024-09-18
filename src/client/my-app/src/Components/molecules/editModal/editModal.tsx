import React, {
    useState
} from 'react'
import {
    Modal,
    FormControl,
    FormLabel,
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
    AddIcon,
    EditIcon
} from '@chakra-ui/icons'
import TaskFill from '../TaskFill/TaskFill'
import { putTasks } from '../../../api/Task'


interface TaskProp {
    companyName: string
    positionTitle: string
    deadlineDate: string
}

interface Props {
    initialFormData: TaskProp
    editTask: (updatedTask:TaskProp) => void
}

const EditModal:React.FC<Props> = ({initialFormData, editTask}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, setFormData] = useState<TaskProp>(initialFormData); // Initialize with the passed form data


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      // Handle submit
      const handleSubmit = () => {
        editTask(formData); // Pass the updated data back to parent

        // call api put data
        // const rs = putTasks(formData['companyName'])

        onClose(); // Close modal after editing
      };
    
  return (
        <>
          <IconButton
            aria-label="Edit"
            icon={<EditIcon boxSize={'1rem'} />}
            color={'black'}
            colorScheme="blue"
            size={'md'}
            onClick={onOpen}
          ></IconButton>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign={'center'}>Edit Task</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel>Company Name</FormLabel>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <FormLabel>Position Title</FormLabel>
                  <Input
                    name="positionTitle"
                    value={formData.positionTitle}
                    onChange={handleChange}
                  />
                  <FormLabel>Deadline Date</FormLabel>
                  <Input
                    name="deadlineDate"
                    value={formData.deadlineDate}
                    onChange={handleChange}
                  />
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Save Changes
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
    </>
  )
}

export default EditModal