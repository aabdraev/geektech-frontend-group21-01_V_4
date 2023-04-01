import React from 'react'
import { useDispatch } from 'react-redux'
import LoginButton from './loginButton/LoginButton'
import LoginInput from './loginInput/LoginInput'

const LoginForm = ({ logIn }) => {

    const dispatch = useDispatch()

    const setLoggedUser = (e) => {
        dispatch({
            type: "USER_LOGIN",
            payload: e.target.value
        })
    }

    return (
        <form onSubmit={logIn} className='login__form'>
            <div className='login__greetings'>
                <h2>Welcome</h2>
                <h3>Log in to continue...</h3>
            </div>
            <LoginInput
                type='text'
                placeholder='Username'
                required
                onChange={setLoggedUser}
            />
            <LoginInput
                type='password'
                placeholder='Enter password' />
            <LoginButton>log in</LoginButton>
        </form>
    )
}

export default LoginForm