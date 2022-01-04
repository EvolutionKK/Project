import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'
import validator from 'validator'


export default function Home() {
    const [input, setInput] = useState({
        fullname: '',
        email: '',
        username: ''
    })
    const [counter, setCounter] = useState(0)
    let history = useHistory();
    const click = () => {
        setCounter(counter + 1);
    }
    const remove = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event) {
        var emil = input.email;
        var uname = input.username;
        var count = 0;
        for(let i=0;i<=uname.length;i++){
            if(uname.charAt(i).match(/^[A-Za-z]+$/)){
                count++;
            }
        }
        if (validator.isEmail(emil) && count>=4) {
            event.preventDefault();
            const newInput = {
                fullname: input.fullname,
                email: input.email,
                username: input.username
            }
            console.log(newInput)
            axios.post("http://localhost:3001/home", newInput)
            history.push("/get");
        }
        else {
            alert("Enter Valid Credentials !")
        }
    }

    return (
        <>
            <div>
                <form>
                    <input onChange={handleChange} value={input.fullname} name='fullname' className='inputt' type='text' placeholder='Full Name' />
                    <input onChange={handleChange} value={input.email} name='email' className='inputt' type='email' placeholder='Email' />
                    <input onChange={handleChange} value={input.username} name='username' className='inputt' type='username' placeholder='Username' />
                </form>
            </div>
            {Array.from(Array(counter)).map((c, index) => {
                return <> <div key={c}> <input className='inputt' type='text' placeholder='Full Name' />
                    <input className='inputt' type='email' placeholder='Email' />
                    <input className='inputt' type='username' placeholder='Username' />

                </div>
                </>
            })}
            <div>
                <button className='buttonn' type='button' onClick={click}>ADD MORE </button>
                <button className='buttonn' type='button' onClick={remove}>REMOVE</button>
            </div>
            <div>
                <button onClick={handleClick} className='buttonn'>SUBMIT</button>
            </div>
        </>
    )
}
