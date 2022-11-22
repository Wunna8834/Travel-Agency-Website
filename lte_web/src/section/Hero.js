import React from 'react';
import './css/Hero.css';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Hero() {
  return (
    <div className='bg-img p-4 text-light'>
        <h2 className='title fs-1 mt-5 fw-bold'>Discover <br/> <span className="text-warning">Adventures</span></h2>
        <p className='mt-3 fw-semibold'>We help you find wonderful trips and great vacation place.<br/>We will provide famous and popular tourist places to visit.</p>
        <a className="btn btn-warning fw-semibold rounded-pill" href="#" role="button">Discover Now</a>
        
        <Form className="mt-2 bg-light rounded-3 p-3 d-lg-flex gap-1 col-lg-8 col-sm-12">
           <FormGroup>
            <Form.Label className="text-dark fw-bolder">Location</Form.Label>
            <Form.Control placeholder="Enter your destination"/>
           </FormGroup>
           <FormGroup>
            <Form.Label className="text-dark fw-bolder">People</Form.Label>
            <Form.Control placeholder="How many people?"/>
           </FormGroup>
           <FormGroup>
            <Form.Label className="text-dark fw-bolder">Date</Form.Label>
            <Form.Control placeholder="When it will start?"/>
           </FormGroup>
           <Button className="col-sm-12 col-lg-3 mt-2" variant="success fw-semibold">Explore Now</Button>
        </Form>
    </div>
  )
}

export default Hero