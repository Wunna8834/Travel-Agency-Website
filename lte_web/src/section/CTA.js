import React from 'react'
import './css/Hero.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function CTA() {
  return (
   <div className='d-flex flex-column flex-lg-row col-12 mb-2 justify-content-center align-items-start gap-4 p-5 bg-light shadow rounded-5'>
    <img className='col-lg-5 col-12' src='https://images.unsplash.com/photo-1557652696-0fd8a35b0d62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
    <div>
        <h2 className='title text-center'>Why you should <span className='text-success fs-2'>choose us?</span></h2>
        <p className='col-12 mt-3'>We are experienced in bringing adventures to start their journey., all outdoor destinations in the world are our specialities.</p>
        <p className='col-12 mt-3'>So don't hestitate to start your adventure right now, nature has already called you!</p>

        <CardGroup className="shadow">
          <Card className="col-lg-3 col-12 bg-success">
            <Card.Body className="text-center">
              <Card.Title className='number-title text-warning'>12K+</Card.Title>
              <Card.Text className="text-font text-light">Success <br/> Journey</Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-12 bg-success">
            <Card.Body className="text-center">
              <Card.Title className='number-title text-warning'>16K+</Card.Title>
              <Card.Text className='text-font text-light'>Awards <br/> Winning</Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-12 bg-success">
            <Card.Body className="text-center">
              <Card.Title className='number-title text-warning'>20+</Card.Title>
              <Card.Text className='text-font text-light'>Years of <br/> Experience</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
    </div>  
   </div>
    
  )
}

export default CTA