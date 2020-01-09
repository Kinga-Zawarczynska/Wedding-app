import React, { Component } from 'react'
import TextArea from './TextArea'
import styles from './FirstView.module.css'

class FirstView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <TextArea />
            </div>
        )
    }
}

export default FirstView