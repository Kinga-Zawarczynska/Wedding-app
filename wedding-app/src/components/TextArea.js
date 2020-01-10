import React, { Component } from 'react';
import styles from './TextArea.module.css'

export default class TextArea extends Component {
    render() {
        return (
            <div className={styles.TextArea}>
                <div className={styles.MiddleTextArea}>
                    <h1>Zapraszamy serdecznie na uroczystość zaślubin!</h1>
                    <p>Kościół - > gdzieś w Morążu o godzinie 14 ??</p>
                    <p>Wesele odbędzie się w sali weselnej Gerczak w Iławie</p>
                    <p>godzina 16</p>
                    <img alt=''/>
                    <a href='/'>Jak dojechać</a>

                </div>
            </div>
        )
    }
}
