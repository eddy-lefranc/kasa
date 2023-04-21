// Importations

import styles from '../styles/components/collapse.module.css';
import React, { useState } from 'react';
import data from '../data/AboutContent.json';
import vectorUp from '../images/vectorUp.png';
import vectorDown from '../images/vectorDown.png';

// Définition de la fonction "Collapse" 

function Collapse() {

    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        } else {
            setClicked(index)
        }
    }

    return (
        <div className={styles.main__collapse}>
            <div className={styles.main__collapse__container}>
                {data.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className={styles.main__collapse__wrap} onClick={() => toggle(index)} key={index}>
                                <h1>{item.Title}</h1>
                                <span>{clicked === index ? <img src={vectorUp} alt='show-icon' /> : <img src={vectorDown} alt='hide-icon' />}</span>
                            </div>
                            {clicked === index ? (
                                <div className={styles.main__collapse__dropdown}>
                                    <p className={styles.main__collapse__text}>{item.Content}</p>
                                </div>
                            ) : null}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

// Exportation de la fonction "Collapse"

export default Collapse;