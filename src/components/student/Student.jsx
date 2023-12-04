import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Student.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Student = () => {
  var [inputs,setInputs]=useState({"Admno":'',"Sname":'',"Age":'',"Status":'INACTIVE'})
  const navigate =useNavigate();
  const InputHandler =(event)=>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

  
  const savedata =()=>{
    axios.post("http://localhost:4005/snew",inputs)
    .then((response)=>{alert("Record Saved")})
    .catch(err=>console.log(err))
    navigate('/studentview')
  }
  return (
    <div className='a'>
        <Typography className='t'>REGISTRATION FORM</Typography>
      <TextField  label="Admission No" variant="filled" name='Admno' value={inputs.Admno} onChange={InputHandler}></TextField><br/><br/>
      <TextField  label="Name" variant="filled" name='Sname' value={inputs.Sname} onChange={InputHandler}></TextField><br/><br/>
      <TextField  label="Age" variant="filled" name='age' value={inputs.age} onChange={InputHandler}></TextField><br/><br/>
      Status: &nbsp;&nbsp;
      <select name='Status' value={inputs.Status} onChange={InputHandler}>
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>
     <br/><br/>
  <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
  )
}

export default Student
