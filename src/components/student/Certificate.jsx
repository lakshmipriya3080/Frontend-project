import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Certificate = () => {
    var [inputs,setInputs]=useState({"sid":'',"qualification":''})

    var[students,setStudents] =useState([]);

    var[selectedimage,setSelectedimage] =useState(null)


    useEffect(()=>{
        axios.get("http://localhost:4005/sview")
        .then(response=>{
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])


    const InputHandler =(event)=>{
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
      }

      const handleimage =(event)=>{
        const file = event.target.files[0];
        setSelectedimage(file)
        inputs.certphoto=file
       }

       const savedata =()=>{
        const formdata = new FormData();
        formdata.append('sid',inputs.sid);
        formdata.append('qualification',inputs.qualification);
        formdata.append('certphoto',selectedimage)

        fetch('http://localhost:4005/certnew',{method:'post',body:formdata,})
        .then((response)=>response.json())
        .then((data)=>{alert("Record Saved")})
        .catch((err)=>{
            console.log("Error")
        })
       }


  return (
    <div>
      Student Name: &nbsp;&nbsp;
      
      <select name="sid" value={inputs.sid} onChange={InputHandler}>
        {
            students.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Sname}</option>
                )
            })
        }
      </select>
      <br/><br/>
      <TextField id="filled-basic" label="Qualification" variant="filled" name='qualification' 
      value={inputs.qualification} onChange={InputHandler} />
      <br/><br/>
      Certificate: &nbsp;&nbsp;
      <input type='file' onChange={handleimage}></input><br/><br/>
      <Button variant="contained" onClick={savedata}>SAVE</Button>

    </div>
  )
}

export default Certificate
