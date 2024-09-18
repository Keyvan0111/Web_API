import React from "react";
import {Box, Stack} from "@chakra-ui/react";
import Task from "../../molecules/Task/Task";
import {
  Droppable,
  Draggable,
} from '@hello-pangea/dnd'

interface TaskProp {
    companyName: string
    positionTitle: string
    deadlineDate: string
}

interface Props {
  tasks: TaskProp[];
  droppableID: string;
  setTasks: React.Dispatch<React.SetStateAction<TaskProp[]>>
}

const StatusTasks:React.FC<Props> = ({tasks, droppableID, setTasks}) => {

    const removeTask = (taskIndex: number) => {
        setTasks((prevTasks) =>
          prevTasks.filter((_, index) => index !== taskIndex)
        );
      };  

    const editTask = (updatedTask:TaskProp, taskIndex:number) => {
        setTasks((prevTask) => {
            const newtask = [...prevTask, updatedTask];
            newtask[taskIndex] = updatedTask
            return newtask
        })
    }

  return (
    <>
    <Droppable 
                droppableId={droppableID}
                >
              {(provided) => (
                <Box 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                    w={'100%'}
                    h={'100%'}
                >
                  <Stack>
                    {tasks.map((content, index) => (
                      <Draggable key={index} draggableId={String(droppableID+index)} index={index}>
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              key={index}
                              content={content}
                              index={index}
                              onEdit={(updatedTask)=> editTask(updatedTask, index)}
                              onRemove={() => removeTask(index)}
                            />
                          </Box>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  </Stack>
                </Box>
              )}
        </Droppable>
    </>
  )
}

export default StatusTasks