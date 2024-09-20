import React from "react";
import {Box, Stack} from "@chakra-ui/react";
import Task from "../../molecules/Task/Task";
import {
  Droppable,
  Draggable,
} from '@hello-pangea/dnd'
import { TaskProp } from "../../../Models/Task";
import { deleteTask, putTasks } from "../../../api/Task";

interface Props {
  tasks: TaskProp[];
  droppableID: string;
  setTasks: React.Dispatch<React.SetStateAction<TaskProp[]>>
}

const StatusTasks:React.FC<Props> = ({tasks, droppableID, setTasks}) => {

    const removeTask = async (taskIndex: number) => {
        const toRemove:TaskProp = tasks[taskIndex]
        await deleteTask(toRemove['item_id'])

        setTasks((prevTasks) =>
          prevTasks.filter((_, index) => index !== taskIndex)
        );
      };  

    const editTask = async (updatedTask:TaskProp, taskIndex:number) => {
        const oldTask:TaskProp = tasks[taskIndex]
        console.log(tasks)

        setTasks((prevTask) => {
            const newtask = [...prevTask];
            newtask[taskIndex] = updatedTask
            return newtask
        })
        const itemId = oldTask['item_id']
        await putTasks(itemId, updatedTask)
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