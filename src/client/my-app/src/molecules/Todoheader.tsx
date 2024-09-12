import React from 'react';
import styles from './Todoheader.module.scss'

const Todoheader: React.FC = () => {
    return (
        <>
            <h1 className={styles.header}>My Todo</h1>
        </>
    )
}

export default Todoheader;