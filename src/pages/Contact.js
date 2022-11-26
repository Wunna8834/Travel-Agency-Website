import React from 'react';
import './Contact.css';
import Card from 'react-bootstrap/Card';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
function Contact() {
  return (
    <div>
       <div>
            <div className='col-8 mx-auto mb-5'>
                <h2 className='text-center'>Get in touch with us!</h2>
            </div>
       </div>
        <div className='mx-lg-auto col-lg-6 mx-md-auto col-md-9 col-sm-12'>
            <Card className='col-10 bg-light mx-4 mb-2'>
                <Card.Body className='d-flex gap-2'>
                    <FaMapMarkerAlt className='fs-1'/>
                    <div>
                        <Card.Title>Address</Card.Title>
                        <Card.Text>No.54, Yaw Min Gyi street. Yangon</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card className='col-10 bg-light mx-4 mb-2'>
                <Card.Body className='d-flex gap-2'>
                    <FaPhoneAlt className='fs-1'/>
                    <div>
                        <Card.Title>Phone</Card.Title>
                        <Card.Text>01-77886541</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card className='col-10 bg-light mx-4'>
                <Card.Body className='d-flex gap-2'>
                    <FaRegEnvelope className='fs-1'/>
                    <div>
                        <Card.Title>Mail</Card.Title>
                        <Card.Text>touragency123@gmail.com</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <h4 className='text-center mt-4'>Direct message to us</h4>
        <Form className='bg-light col-lg-8 col-sm-12 col-md-10 mx-md-auto rounded p-3 mx-lg-auto'>
            <Form.Group>
                <Form.Label className='fw-semibold'>First Name</Form.Label>
                <Form.Control className='col-lg-8 col-sm-10' placeholder="Enter your first name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='fw-semibold'>Second Name</Form.Label>
                <Form.Control className='col-2' placeholder="Enter your second name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='fw-semibold'>Message</Form.Label>
                <Form.Control as="textarea" className='col-2' placeholder="Write message to us"/>
            </Form.Group>
            <Button variant='primary' className='mt-3 px-3'>Send</Button>
        </Form>
    </div>
  )
}

export default Contact


