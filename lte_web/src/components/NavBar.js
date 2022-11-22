import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
  return (
    <Navbar bg="light" variant="white" expand="lg" className="sticky-top shadow p-3 mb-5 rounded">
        <Container>
            <Navbar.Brand href="/" className='brand'>Travel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav variant="pills" defaultActiveKey="/" className="me-auto">
                    <Nav.Item>
                        <Link to="/" className='nav-link'><Nav.Link href="/">Home</Nav.Link></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/about" className='nav-link'><Nav.Link href="/about">About</Nav.Link></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/service" className='nav-link'><Nav.Link href="/service">Service</Nav.Link></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contact" className='nav-link'><Nav.Link href="/contact">Contact</Nav.Link></Link>
                    </Nav.Item>
                   
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="btn btn-primary rounded-pill fw-semibold">Register</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
  )
}

export default NavBar