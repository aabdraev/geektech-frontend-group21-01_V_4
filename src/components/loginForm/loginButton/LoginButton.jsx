import React from 'react'
import classes from './LoginButton.module.css'

const LoginButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.loginButton}>{children}</button>
    )
}

export default LoginButton