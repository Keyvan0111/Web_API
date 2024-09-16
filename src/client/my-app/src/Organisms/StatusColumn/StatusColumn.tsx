import React, { useEffect, useState } from "react";
import { chakra, Box, Stack, Card, IconButton } from "@chakra-ui/react";
import {
  CloseIcon,
  DeleteIcon,
  AddIcon,
  CheckIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import Task from "../../molecules/Task/Task";
import StatusColHeader from "../../molecules/StatusColHeader/StatusColHeader";
import {
  Droppable,
  Draggable,
  DragDropContext,
  DropResult,
} from '@hello-pangea/dnd'

interface Props {
  header: string;
  headerBg: string;
  titleColor: string;
  tasks: string[];
  droppableID: string;
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const StatusColumn: React.FC<Props> = ({
  header,
  headerBg,
  titleColor,
  tasks,
  droppableID,
  setTasks,
}) => {

  const handleAddTask = (newTask: { companyName: string; positionTitle: string; deadlineDate: string }) => {
    // setTasks((prevTodos) => [...prevTodos, newTask]);
  };

  const removeTask = (taskIndex: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== taskIndex)
    );
  };  

  return (
    <>
      <Box width="100%" color="black" fontSize={"1.2rem"}>
        <StatusColHeader
          header={header}
          headerBg={headerBg}
          titleColor={titleColor}
          handleAdd={handleAddTask}
        />
          <Box
            borderRadius={"0.5rem"}
            w={"100%"}
            h={"100%"}
            bgColor={"#EAEEF0"}
            padding={"5px"}
            overflow={"hidden"}
            overflowY={"scroll"}
          >
            <Droppable 
                droppableId={droppableID}
                >
              {(provided) => (
                <Box 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
                  <Stack>
                    {tasks.map((task, index) => (
                      <Draggable key={index} draggableId={String(droppableID+index)} index={index}>
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              key={index}
                              body={task}
                              index={index}
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
            <h1>Droppable ID - {droppableID}</h1>
          </Box>
      </Box>
    </>
  );
};

export default StatusColumn;
