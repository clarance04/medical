import React, { useState } from 'react'
import Select from 'react-select'
import Swal from 'sweetalert2'
import '../Pages/registeration.css'

export default function Registeration() {

    // ==========Sweet Alert button===========

    const showAlert =()=>{
    //     Swal.fire({
    //         title: 'Registered Success',
    //         icon: 'success',
    //         timer: 2000

    //     });

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Incomplete page',
    //         text: 'Something went wrong!',
            
    //       })
    };

    // =====Martial Status in Select dropdown method==========

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
        alert("Registered Successfully")

      }
      console.log(detail)

      
    
      const martialOptions =[
          {value:"Married", label:"Married"},
          {value:"Unmarried", label:"Unmarried"},
          {value:"Divorced", label:"Divorced"},
        ]
        // ===========state in select dropdown method========

        const [state,setState] = useState ({})
        const handleState =(e,name)=>{
        }
        console.log(state)

        const stateOptions =[
            {value:"Karnataka", label:"Karnataka"},
            {value:"Tamil Nadu", label:"Tamil Nadu"},
            {value:"Kerala", label:"Kerala"},
            {value:"Andhra Pradesh", label:"Andhra Pradesh"},
            {value:"Telungana", label:"Telungana"},
            {value:"Pondicherry", label:"Pondicherry"},
            {value:"Goa", label:"Goa"},
        ]

        // =======DOB Validation=========

       
           const handleDob =(e,name)=>{
 
              console.log(e.target.value)
              var dob1 = new Date() - new Date(e.target.value);
              console.log(dob1)
                var checkYear =  Math.floor(dob1 / 31536000000);
               console.log(checkYear)
              if (checkYear > 1){
              
              } else {
                alert ("Enter a valid date of birth");
              }
              
             };
           

    return (
    <div>
        <form className='container card  regfor' onSubmit={handleSubmit}>
            <h1 className='text-center'>Patient Registeration</h1>
            <div className='row mb-4'>
                <div className='col'>
                <div className='form-outline'>
                    <label class="form-label" for="form6Example1">Patient Last name</label>
                    <input 
                    type="text"
                    name="name"
                    minLength={5}
                    maxLength={15}
                    onChange={handleChange}
                    id="form6Example1" 
                    class="form-control"
                    required
                     /><div class="valid-feedback">
                     Looks good!
                  </div>
                    </div>
                    
                </div>

                <div className='col'>
                    <div className='form-outline'>
                    <label class="form-label" for="form6Example1">Patient Last name</label>
                    <input 
                    type="text"
                    name="name"
                    minLength={5}
                    maxLength={15}
                    onChange={handleChange}

                    // onChange={handlekeep}
                    id="form6Example1" 
                    class="form-control"
                    required
                    />
                    </div>
                </div>
            </div>

            <div className='row mb-4'>
                <div className='col'>
                <div className='form-outline phone-no'>
                    <label class="form-label" for="form6Example1">Patient Phone No</label>
                    <input 
                    type="number"
                    name="phone"
                    onChange={handleChange}

                    onKeyPress={(e) => e.target.value.length >= 10  && e.preventDefault()}
                    id="form6Example1" 
                    class="form-control"
                    required
                    />
                    </div>
                </div>

                <div className='col'>
                    <div className='form-outline'>
                    <label class="form-label" for="form6Example1">Patient Email Id</label>
                    <input 
                    type="email"
                    name="email"
                    onChange={handleChange}

                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    id="form6Example1" 
                    class="form-control"
                    required
                    />
                    </div>

                </div>
            </div>

            <div className='row mb-4'>
                <div className='col'>
                <div className='form-outline'>
                    <label class="form-label" for="form6Example1">Patient DOB</label>
                    <input 
                    type="date"
                    name="date"
                    id="form6Example1" 
                    class="form-control"
                    onChange={(e)=>handleDob(e,"dob")}
                    required
                    />
                    </div>
                </div>

                <div className='col'>
                    <div className='form-outline'>
                    <label class="form-label" for="form6Example1">Martial Status</label>
                    <Select
                      options={martialOptions} 
                      onChange={(e)=>handleChange(e,"martial")}
                      required
                      className='select'>
                    </Select>
                    </div>
                </div>
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form6Example7" >Address</label>
                <textarea class="form-control" id="form6Example7" rows="2" onChange={handleChange} ></textarea>
            </div>

            <div className='row mb-4'>
                <div className='col'>
                <div className='form-outline'>
                    <label class="form-label" for="form6Example1">City</label>
                    <input 
                    type="text"
                    maxLength={15}
                    id="form6Example1" 
                    class="form-control"
                    onChange={handleChange}
                    required
                    />
                    </div>
                </div>

                <div className='col'>
                    <div className='form-outline'>
                    <label class="form-label" for="form6Example1">State</label>
                    <Select
                      required
                      className='select'
                      
                      options={stateOptions} 
                      onChange={(e)=>handleState(e,"state")}
                      >
                    </Select>
                    </div>
                </div>

                <div className='col'>
                    <div className='form-outline'>
                    <label class="form-label" for="form6Example1">Zip</label>
                    <input 
                    type="number"
                    name="zip"
                    maxLength={6}
                    onKeyPress={(e) => e.target.value.length >= 6  && e.preventDefault()}
                    required
                    id="form6Example1" 
                    onChange={handleChange}
                    class="form-control"
                    />
                    </div>
                </div>
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form6Example7">Additional information</label>
                <textarea class="form-control" id="form6Example7" rows="3"></textarea>
            </div>
            <div className='text-center'>
            <button type="submit" class="btn btn btn-block mb-4 button " onClick={() => showAlert()}>Submit</button>
            </div>
            
        </form>
    </div>
  )
}
