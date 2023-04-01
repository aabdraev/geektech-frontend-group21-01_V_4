import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../components/myButton/MyButton'

const MainPage = () => {

    const { mathOutput } = useSelector(state => state)

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch({
            type: "ADD_VALUES",
            payload: { value1, value2 }
        })
    }

    const handleSub = () => {
        dispatch({
            type: "SUBSTRACT_VALUES",
            payload: { value1, value2 }
        })
    }
    const handleMul = () => {
        dispatch({
            type: "MULTIPLE_VALUES",
            payload: { value1, value2 }
        })
    }
    const handleDiv = () => {
        dispatch({
            type: "DIVIDE_VALUES",
            payload: { value1, value2 }
        })
    }

    return (
        <div className='main__inner'>
            <h1>Calculator</h1>
            <div className='calculator'>
                <div className='calculator__values'>
                    <input type='number' placeholder='enter 1st value...' onChange={(e) => { setValue1(e.target.value) }} />
                    <input type='number' placeholder='enter 2nd value...' onChange={(e) => { setValue2(e.target.value) }} />
                </div>
                <div className='calculator__btns'>
                    <MyButton onClick={handleAdd}>&#43;</MyButton>
                    <MyButton onClick={handleSub}>&#8722;</MyButton>
                    <MyButton onClick={handleMul}>&#215;</MyButton>
                    <MyButton onClick={handleDiv}>&#247;</MyButton>
                </div>
                <div className='calculator__output'>
                    <h2>Output: {mathOutput}</h2>
                </div>
            </div>
        </div >
    )
}

export default MainPage