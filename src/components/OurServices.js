import React from 'react'
import Button from 'react-bootstrap/Button'
import '../section/css/Hero.css'

function OurServices(props) {
  return (
    <div className='d-flex flex-column col-9 mx-auto flex-lg-row justify-content-center align-items-center gap-3 mx-5 mb-3'>
        <img className='col-lg-4 col-12' src={props.img}/>
        <div className='col-lg-8 col-sm-12'>
            <h3 className='title'>{props.title}</h3>
            <p className='col-lg-8 mt-3 col-sm-12'>{props.description}</p>
            <Button variant="primary rounded-pill">Read More</Button>
        </div>
    </div>
  )
}

export default OurServices