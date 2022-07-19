import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GetApi from './GetApi'
import './home.css'


export default function Home() {
  return (
    <div>
     <div id="carouselExampleControls" class="carousel slide img01" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src="https://www.floreshospital.com/uploads/banner3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://5.imimg.com/data5/QX/GN/MY-27338844/banner3-500x500.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.metizsoft.com/wp-content/uploads/2018/12/Banner2-New.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://www.floreshospital.com/uploads/banner3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<br />

    <div>
     <Row>
      <Col md="1">
      </Col>

      <Col md="4">
        <img
          src="https://wallpaperaccess.com/full/619976.jpg"
          className="imgdoc"
          />
      </Col>

      <Col md="6">
        <div>
          <p className='htitle1'>Doctors at MedSpot Hospital</p>
          <p className='hcont1'>Doctors and specialists at MedSpot Hospital are considered to be one of the best doctors in India, and this is considering the amount of experience and expertise they bring with them in their respective domains.</p>
          <p className='htitle2'>Our Commitment Towards Excellence</p>
          <p className='hcont2'>SevenHills has a dedicated team of full time and visiting consultants to focus on important healthcare issues and research that affect patients of all ages. Our team of dedicated doctors is highly qualified and committed to excellence in providing an aesthetically pleasing environment to ensure quality in medical care.</p>
        </div>
      </Col>

      <Col md="1">
      </Col>
     </Row>
    </div>

    
    <div className='home-spec'>
    <Row>
      <Col className='home-method' md="6">
        <div>
         <h5><i className="fas fa-user-md "/> Method to Miracle</h5>

         <Row>
         <Col md="1">
          </Col>

          <Col md="6">
          <p> Dr.Infant MBBS,MD</p><hr />
          <p>Dr.Jerald MBBS,MD</p><hr />
          <p>Dr.Santhan MBBS,MD</p><hr />
          <p>Dr.Jerome MBBS,MD</p><hr />
          <p>Dr.Muthayan MBBS,MD</p><hr />
          <p>Dr.John MBBS,MD</p><hr />
          
          </Col>

          <Col md="4">
          <p>Pediatricians</p><hr />
          <p>Cardiologist</p><hr />
          <p> General Surgeon</p><hr />
          <p> Dermatologists</p><hr />
          <p> Gynecologist</p><hr />
          <p> ENT Specialist</p><hr />
          
          </Col>

          <Col md="1">
          </Col>
         </Row>

         </div>
      </Col>

      <Col md="6">
        <img
          src="https://img.myloview.com/stickers/happy-friendly-indian-practitioner-meeting-with-patient-in-hospital-office-giving-consultation-telling-good-news-about-checkup-result-young-man-visiting-consulting-doctor-medic-care-concept-700-270049285.jpg"
          className="imgdoc2"
          />
      </Col>

     
     </Row>

    </div> <br/>

    <div className='home-plastic container card'>
      <br />
      <br />
      <p>The Department of Plastic & Cosmetic Surgery at Manipal Hospitals is a comprehensive practice for restoring, reconstructing and enhancing the physical attributes of its patients to help them achieve a better quality of life.</p><br />
      <h2>Plastic And Cosmetic Surgery</h2>
      <hr />
      
      <div className='text-center'>
            <button type="submit" class=" btn btn mb-4 button-km ">Know More</button>
      </div>

    </div>


    </div>
  )
}
