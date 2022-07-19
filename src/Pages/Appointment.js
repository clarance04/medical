import React, { useState } from 'react'
import {  Button, Form } from 'react-bootstrap'
import Swal from 'sweetalert2';

import './appointment.css'

export default function Appointment() {

  const showAlert = () => {
    // Swal.fire({
    //   title: 'Thank You',
    //   icon : 'success',
    //   timer :3000
    
    // })
  } 

 

    const [detail,setDetail] = useState({})
      const handleChange =(e,name)=>{
        if (name){
          setDetail({...detail,[name]:e})
        } else{
          setDetail({...detail,[e.target.name]:e.target.value})
        }
      }
     
      const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Submitted")
        
      }
      console.log(detail)



  return (
    <div>
        <Form 
        onSubmit={handleSubmit}
        className='container card appoifor'>
            <h3>Appointment Form</h3>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                name="name"
                maxLength={25}
                minLength={4}
                required
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                type="number"
                name="phone"
                onKeyPress={(e) => e.target.value.length >= 10  && e.preventDefault()}
                onChange={handleChange}
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={handleChange}
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <textarea class="form-control" id="form6Example7" onChange={handleChange} rows="2" />
            </Form.Group>

            {/* <div className='text-center appoi-button'>
            <Button  type="submit" className="btn btn mb-2 mt-2" onClick={() => showAlert()}  > Fix Appointment</Button>
            </div> */}

            <div className='text-center '>
            <button  type="submit" class=" btn btn mb-4 appoi-button" onClick={() => showAlert()}  > Fix Appointment</button>
            </div>
        </Form>
        
       
        
    </div>
  )
}
