import React, { useEffect, useState } from "react";
import { chakra, Box, Stack, Card, IconButton } from "@chakra-ui/react";
import StatusColHeader from "../../molecules/StatusColHeader/StatusColHeader";
import StatusTasks from "../../molecules/StatusTasks/StatusTasks";

interface TaskProp {
    companyName: string
    positionTitle: string
    deadlineDate: string
}

interface Props {
  header: string;
  headerBg: string;
  titleColor: string;
  tasks: TaskProp[];
  droppableID: string;
  setTasks: React.Dispatch<React.SetStateAction<TaskProp[]>>;
}

const StatusColumn: React.FC<Props> = ({
  header,
  headerBg,
  titleColor,
  tasks,
  droppableID,
  setTasks,
}) => {

  const handleAddTaskMine = (newTask: { companyName: string; positionTitle: string; deadlineDate: string }) => {

    setTasks((prevTodos) => [...prevTodos, newTask]);
  };

  const handleAddTask = (newTask: { companyName: string; positionTitle: string; deadlineDate: string }) => {
    setTasks((prevTodos) => [...prevTodos, newTask]);
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
            <StatusTasks tasks={tasks} droppableID={droppableID} setTasks={setTasks}/>
        </Box>
      </Box>
    </>
  );
};

export default StatusColumn;
