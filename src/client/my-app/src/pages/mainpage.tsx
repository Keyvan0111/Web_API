import React, { useState } from "react";
import styles from './mainpage.module.scss'
import Todoheader from "../Atoms/Todoheader";
import StatusColumn from "../Organisms/StatusColumn/StatusColumn";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Box, Flex } from "@chakra-ui/react";
import { color } from "framer-motion";

const Mainpage: React.FC = () => {
    const [activeCard, setActiveCard] = useState(null)

    const [todos, setTodos] = useState<string[]>([])
    const [ongoings, setOngoings] = useState<string[]>([])
    const [done, setDone] = useState<string[]>([])

    

    const HandleOnDragEnd = (result: DropResult) => {
        console.log(result)
        const { source, destination } = result;
    
        if (!destination) return;
    
        const sourceCol = source.droppableId;
        const destinationCol = destination.droppableId;

    };

    return (
        <div className={styles.outer}>
            <div className={styles.todosection}>

                <Todoheader/>
                <DragDropContext onDragEnd={HandleOnDragEnd}>
                    <Box
                    margin={'0px'}
                    w={'100%'}
                    h={'85%'}
                    display={'flex'}
                    flexDir={"row"}
                    justifyContent={"space-evenly"}
                    gap={'20px'}
                    >

                        <StatusColumn header="Todo" headerBg="lightgray" tasks={todos} droppableID="todos" setTasks={setTodos}/>
                        <StatusColumn header="In-progress" headerBg="#829cfa" tasks={ongoings} droppableID="ongoings" setTasks={setOngoings}/>
                        <StatusColumn header="Done" headerBg="#78ff91" tasks={done} droppableID="done" setTasks={setDone}/>

                    </Box>
                </DragDropContext>
            </div>
        </div>
    )
}

export default Mainpage;