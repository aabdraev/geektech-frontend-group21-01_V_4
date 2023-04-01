import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/loginForm/LoginForm'

const LoginPage = () => {

    const navigate = useNavigate()

    const hangleLogIn = (e) => {
        e.preventDefault()
        setTimeout(() => {
            navigate('/main')
        }, 1500)
    }

    return (
        <div className='login__inner'>
            <LoginForm logIn={hangleLogIn} />
        </div>
    )
}

export default LoginPage