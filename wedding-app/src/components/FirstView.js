import React, { Component } from 'react'
import TextArea from './TextArea'
import ImagesArea from './ImagesArea';
import styles from './FirstView.module.css'

class FirstView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <TextArea />
                <ImagesArea/>
            </div>
        )
    }
}

export default FirstView