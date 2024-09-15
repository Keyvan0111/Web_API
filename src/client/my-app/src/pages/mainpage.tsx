import React from "react";
import styles from './mainpage.module.scss'
import Todoheader from "../Atoms/Todoheader";
import StatusColumn from "../molecules/StatusColumn/StatusColumn";
import { Box, Flex } from "@chakra-ui/react";
import { color } from "framer-motion";

const Mainpage: React.FC = () => {

    return (
        <div className={styles.outer}>
            <div className={styles.todosection}>
                <Todoheader/>
                <Box
                margin={'0px'}
                w={'100%'}
                h={'85%'}
                display={'flex'}
                flexDir={"row"}
                justifyContent={"space-evenly"}
                gap={'20px'}
                >

                    <StatusColumn header="Todo" headerBg="lightgray"/>
                    <StatusColumn header="In-progress" headerBg="#829cfa"/>
                    <StatusColumn header="Done" headerBg="#78ff91"/>

                </Box>
            </div>
        </div>
    )
}

export default Mainpage;