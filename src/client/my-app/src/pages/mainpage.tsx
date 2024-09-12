import React from "react";
import styles from './mainpage.module.scss'
import Todoheader from "../molecules/Todoheader";

const Mainpage: React.FC = () => {

    return (
        <div className={styles.outer}>
            <div className={styles.todosection}>
                <div>
                    <Todoheader/>
                </div>
                <p></p>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Mainpage;