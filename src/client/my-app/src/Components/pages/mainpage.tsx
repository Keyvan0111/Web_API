import React, { 
    useState,
    SetStateAction,
    useEffect
 } from "react";
import styles from './mainpage.module.scss'
import Todoheader from "../Atoms/Todoheader";
import StatusColumn from "../Organisms/StatusColumn/StatusColumn";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Box, filter, Flex } from "@chakra-ui/react";
import { color } from "framer-motion";
import { assert, error } from "console";
import { getTasks } from "../../api/Task";

interface TaskProp {
    companyName: string
    positionTitle: string
    deadlineDate: string
}

interface Todo {
    company: string
    positionTitle: string
    deadlineDate: string
}

interface TodoArr {
    items: Todo[]
}

const Mainpage: React.FC = () => {
    const [todos, setTodos] = useState<TaskProp[]>([])
    const [ongoings, setOngoings] = useState<TaskProp[]>([])
    const [done, setDone] = useState<TaskProp[]>([])

    const getColState = (dropID: string) => {
        try {
            switch (dropID) {
                case 'todos':
                    return todos
                case 'ongoings':
                    return ongoings
                case 'done':
                    return done
                default:
                    console.log('Failed');
                    return []
            }
        } catch (error) {
            console.log("Failed getting column item when handling _onDragEnd_")
        }
    }
    
    const updateState = (stateVar: string, updatedState: TaskProp[]) => {
        try {
            switch (stateVar) {
                case 'todos':
                    setTodos(updatedState)
                    break;
                case 'ongoings':
                    setOngoings(updatedState)
                    break;
                case 'done':
                    setDone(updatedState)
                    break;
                default:
                    console.log('Failed')
                    break;
            }

        } catch (error) {
            console.log(`Failed updating react state ${stateVar}}`)
        }
    }

    const HandleOnDragEnd = (result: DropResult) => {
        console.log(result)
        const { source, destination } = result;
    
        if (!destination) return;
    
        const sourceCol = source.droppableId;
        const destinationCol = destination.droppableId;

        let srcItems: TaskProp[] = getColState(sourceCol) || []
        let dstItems: TaskProp[] = getColState(destinationCol) || []

        const [movedItem] = srcItems.splice(source.index, 1)

        dstItems.splice(destination.index, 0,movedItem)

        updateState(destinationCol, srcItems);
        updateState(destinationCol, dstItems);
    };

    
    const addPreTodos = (newtasks:TodoArr) => {
        const items:Todo[] = newtasks['items']
        for (let i = 0; i < items.length; i++) {
            console.log(items)
            const item:Todo = items[i]
            const task:TaskProp = {
                companyName: item.company,
                positionTitle: item.positionTitle,
                deadlineDate: item.deadlineDate
            };
            setTodos((prevtasks) => [...prevtasks, task])
        }
    }

    useEffect(() => {
        let isMounted = true; // Flag to check if component is mounted
        
        const fetchTasks = async () => {
            const tasks:any = await getTasks();
            if (isMounted) { // Only proceed if component is still mounted
                addPreTodos(tasks);
            }
        };
        
        fetchTasks();
        
        return () => {
            isMounted = false; // Cleanup on component unmount
        };
    }, []);
    
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
                        <StatusColumn header="Todo" headerBg="lightgray" titleColor="black" tasks={todos} droppableID="todos" setTasks={setTodos}/>
                        <StatusColumn header="In-progress" headerBg="#1c2b41" titleColor="#85b8ff" tasks={ongoings} droppableID="ongoings" setTasks={setOngoings}/>
                        <StatusColumn header="Done" headerBg="#1c3329" titleColor="#7de2b8" tasks={done} droppableID="done" setTasks={setDone}/>

                    </Box>
                </DragDropContext>
            </div>
        </div>
    )
}

export default Mainpage;