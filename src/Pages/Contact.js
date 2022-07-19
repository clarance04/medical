import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './contact.css'
import data from "../MOCK_DATA.json"
export default function Contact() {
  const [values, setValues] = useState(data)
  console.log(values,"the data is")
  return (
    <div>
        <div>
     <Row className='contact-top'>
      <Col md="1">
      </Col>

      <Col md="4">
        <img
          src="https://static.wixstatic.com/media/afe6eb_20b7df2f24594547a80815f0ecbdc217~mv2.jpg/v1/fill/w_717,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/building%20(1)%20copy.jpg"
          className="imgdoc"
          />
      </Col>
    

      <Col md="6">
        <div>
          <p className='htitle1'>Contact MedSpot Hospital</p>
          <p className='hcont1'>Doctors and specialists at MedSpot Hospital are considered to be one of the best doctors in India, and this is considering the amount of experience and expertise they bring with them in their respective domains.</p><hr />
          <p className='htitle2'>Connect with Us</p>
          <p className='hcont2'>SevenHills has a dedicated team of full time and visiting consultants to focus on important healthcare issues and research that affect patients of all ages. Our team of dedicated doctors is highly qualified and committed to excellence in providing an aesthetically pleasing environment to ensure quality in medical care.</p>
        </div>
      </Col>

      <Col md="1">
      </Col>
     </Row>
    </div>
    
    <hr />

    <div>
        <Row className='contact'>
          <Col md="1"></Col>

       
            <Col md="3">
              <h2>Contact Details</h2>
            </Col>

            <Col  md="3">
                <h3>Address</h3>
                
                <p>MedSpot Health City,<br />
                   Marol Maroshi Road,<br />
                   Mysore East,<br />
                   Mysore – 400059<br />
                   Karnataka.<br />
                   </p>
                
            </Col>

            <Col md="3">
                <h3>Phone</h3>
                
                <p>MedSpot Telephone number <br />
                +91 8952634189</p>

                <h3>Email</h3>
          <p>medspotmys@gmail</p>
            </Col>
            
           

            
         

           

        </Row>
       
        {/* <div>
            <Row>
                <Col md="1">
                </Col>

                <Col md="3">
                <h3>Address to MedSopt</h3>
                <hr />
                <h4>MedSpot Health City,<br />
                   Marol Maroshi Road,<br />
                   Mysore East,<br />
                   Mysore – 400059<br />
                   Karnataka.<br />
                   Contact: 022-6767 6767<br />
                   Email: medspotmys@gmail.com<br /></h4>

            </Col>

                <Col md="1">
                </Col>
            </Row>
        </div> */}
    </div>
    </div>
  )
}
