import React from "react";
import styles from './mainpage.module.scss'
import Todoheader from "../molecules/Todoheader";
import { Box } from "@chakra-ui/react";

const Mainpage: React.FC = () => {



    return (
        <div className={styles.outer}>
            <div className={styles.todosection}>
                <div>
                    <Todoheader/>
                </div>

                <p style={{
                    width: '90%',
                    height: '2px',
                    backgroundColor:'black',
                }}></p>

                <Box
                    width='90%'
                    color="black"
                    marginTop={'10px'}
                    border={'2px solid black'}
                    >
                    awdawd
                </Box>
            </div>
        </div>
    )
}

export default Mainpage;