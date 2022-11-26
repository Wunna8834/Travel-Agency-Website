import React from 'react'
import '../section/css/Hero.css'
import Button from 'react-bootstrap/Button'
import { FaApple } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import UserReview from '../components/UserReview';
function About() {
  return (
    <div>
      <h3 className='text-center title fs-2'>Our Company's <span className='text-primary'>Profile</span></h3>
      <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3'> 
        <img className='col-lg-4 col-8' src='https://plus.unsplash.com/premium_photo-1661310077992-c6a9bc2df4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'/>
        <p className='col-12 col-lg-6 mx-sm-3' style={{textAlign: "justify"}}>Tour Comapny Ltd. has been established since July 1991. Tour is your reliable travel agent in Myanmar.All our tour guides are professional and experienced. Our guides cover many different languages - English, French, German, Spanish, Italian, Japanese, Chinese and Thai. We are an authorized agent for most of the domestic airlines. Besides domestic air tickets, we are also a faster and cheaper option to arrange for international airline ticketing. Train and bus tickets are available in our offices.</p>
      </div>
      <hr />
      <div className='mb-2 col-12 container-img p-3'>
        <h3 className='text-center title fs-2'>Get alert to our <span className='text-danger'>latest</span> <span className='text-info'>information</span></h3>
        <p className='text-center'>Get alerts when we find ticket prices that match your budget.<br />Price Alerts is available on the web and the app.</p>

        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3'>
          <Button variant="dark" size="lg" className="lh-1"> <FaApple className="fs-2"/>Download on the<br/><span className="fw-semibold">App store</span></Button>
          <Button variant="dark" size="lg" className="lh-1"><FaPlay className='fs-2'/> Download on the<br/><span className='fw-semibold'>Play store</span></Button>
        </div>
      </div>

      <div>
        <h3 className='text-center title fs-2 fw-'>Satisfied <span className="text-success">Customers</span></h3>
        
        <div className="d-flex flex-wrap flex-column flex-lg-row flex-md-row mb-5 justify-content-center align-items-start gap-2 col-12">
          <UserReview 
            avartarUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Kelvin"
            location="Shwe Pyi Thar"
            star="4.5"
            review="I feel the ease when making choices tourist destination with this agency"
          />
          <UserReview
            avartarUrl="https://plus.unsplash.com/premium_photo-1665203440894-75ed245def8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Sarah"
            location="Mandalay"
            star="4"
            review="I really like the service because it is too convenient for me"
          />
          <UserReview
            avartarUrl="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Mickel"
            location="Pyin Oo Lwin"
            star="3.5"
            review="The services offered by this agency are very complete that's why I like"
          />
          <UserReview 
            avartarUrl="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Boraj"
            location="Tarmwe"
            star="4"
            review="Good customer service. And many packages to choose"
          />
          <UserReview 
            avartarUrl="https://images.unsplash.com/photo-1581090465237-2215893ba918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Kooper"
            location="Pathein"
            star="4.2"
            review="Impressive agency. I am very pleased whenever there is a trip"
          />
          <UserReview 
            avartarUrl="https://images.unsplash.com/photo-1581092165309-2ab35320ca70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Hary"
            location="Myit Kyi Nar"
            star="4"
            review="It is very rare that there are applications or services providers like this"
          />
          
        </div>
      </div>
    </div>
  )
}

export default About