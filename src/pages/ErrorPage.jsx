import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/myButton/MyButton'

const ErrorPage = () => {

    const navigate = useNavigate()

    const goMain = () => {
        navigate('/')
    }

    return (
        <div className='error__inner'>
            <h1>Oops...</h1>
            <h2>something went wrong</h2>
            <h2>404. Page not found '(</h2>
            <MyButton onClick={goMain}>Back to main</MyButton>
        </div>
    )
}

export default ErrorPage