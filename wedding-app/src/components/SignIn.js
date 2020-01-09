import React, { Component } from 'react'
import styles from './SignIn.module.css'

 class SignIn extends Component {
    state = {
        login: '',
        password: ''
    }
    handleChange = (e) => {
        console.log(e)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    render() {
        return (
            <div className={styles.SignIn}>
                <form onSubmit={this.handleSubmit} className={styles.SignInForm}>
                    {/* <p className={styles.FormTitle}>Zaloguj się</p> */}
                    <div className={styles.FormInput}>
                        <label htmlFor="login">Login</label>
                        <input type="text" id="login" onChange={this.handleChange}/>
                    </div>
                    <div className={styles.FormInput}>
                        <label htmlFor="password">Hasło</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className={styles.FormInput}>
                        <button className={styles.FormButton}>Wyślij</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn