'use client'

import { Container, Nav, Navbar } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";


export default function Header () {

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home" style={{fontSize: 30}}> LER <FaPlus style={{fontSize: 20}}/></Navbar.Brand>
            <Nav className="d-flex">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}