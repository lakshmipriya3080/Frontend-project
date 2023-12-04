import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [un,setUn]=useState('')
    const [pwd,setPwd]=useState('')
    const [error,setError]=useState(false)
    const navigate=useNavigate()

    const readusername =(event) =>{
        event.preventDefault();
        setUn(event.target.value)
        console.log(event.target.value);
    }

    const readpassword =(event) =>{
        event.preventDefault();
        setPwd(event.target.value)
        console.log(event.target.value);
    }

    const savedata =(event) =>{
        event.preventDefault();
        if(un.trim() ==='' || pwd.trim() ==='')
        {
            setError(true)
            return

        }
        else
        {
            setError(false)
            navigate('/home')
        }

    }
  return (
    <div className='bb'>
      <h1 className='cc'>SIGN IN</h1>
      USER NAME<input type='text' onChange={readusername}/><br/><br/>
      PASSWORD<input type='password' onChange={readpassword}/><br/><br/>
      <button type='submit' onClick={savedata}>LOG IN</button><br/><br/>
      <p className='r'>{error && 'All fields must be entered !!'}</p>
    </div>
  )
}

export default Login
