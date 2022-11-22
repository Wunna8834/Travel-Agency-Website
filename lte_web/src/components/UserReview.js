import React from 'react'
import Card from 'react-bootstrap/Card'
import './UserReview.css';
import { FaStar } from 'react-icons/fa';
function UserReview(props) {
  return (
    
        <Card className='col-lg-3 col-sm-12 col-md-4' style={{maxHeight: 'fit-content'}}>
            <Card.Header className='d-flex justify-content-around align-items-center shadow'>
                <div>
                    <img className="img-border" src={props.avartarUrl}/>
                </div>
                <div className='lh-1'>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text className="text-muted">{props.location}</Card.Text>
                </div>
                <div>
                    <p><FaStar className="text-warning"/>{props.star}</p>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>{props.review}</Card.Text>
            </Card.Body>
        </Card>
        
    
    
  )
}

export default UserReview