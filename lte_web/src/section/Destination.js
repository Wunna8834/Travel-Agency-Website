import React from 'react'
import DestinationCard from '../components/DestinationCard'
import './css/Hero.css'
function Destination() {
  return (
    <div className='my-3'>
        <h2 className="title text-center fs-2">Find <span style={{color: "red"}}>Popular</span> Destination</h2>
        <div className='d-flex flex-column flex-lg-row gap-2 p-4'>
            <DestinationCard 
                img="https://images.unsplash.com/photo-1566984991763-91b985a3f9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                placename="Grand Canal"
                location="Italy"
                price="500"
                style="outline-success"
            />
            <DestinationCard 
                img="https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                placename="Effel Tower"
                location="Paris"
                price="800"
                style="btn btn-success"
            />
            <DestinationCard 
                img="https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                placename="Mount Agung"
                location="Indonesia"
                price="600"
                style="outline-success"
            />
        </div>
    </div>
  )
}

export default Destination