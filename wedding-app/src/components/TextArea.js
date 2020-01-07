import React, { Component } from 'react';
import styles from './TextArea.module.css'

export default class TextArea extends Component {
    render() {
        return (
            <div className={styles.TextArea}>
            <div className={styles.HeaderTextArea}>
                <p>Natalka&Konrad</p>
                <p>Zaloguj</p>
            </div>
            <div className={styles.MiddleTextArea}>
                <p>Kościół</p>
                <p>miejsce</p>
                <p>godzina</p>
                <img alt=''/>
                <a href=''>Jak dojechać</a>

                
                
            </div>
            </div>
        )
    }
}
