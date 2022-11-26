import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function DestinationCard(props) {
  return (
    <div>
        <Card className="col-lg-12">
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.placename}</Card.Title>
                <Card.Text className="text-muted">{props.location}</Card.Text>
                <div className="d-flex justify-content-between">
                    <h3><span className='text-warning fw-bold'>$</span>{props.price}<span className="text-secondary fs-5">/Person</span></h3>
                    <Button variant={props.style} size="sm px-3">Book</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default DestinationCard