'use client'

//imports de bibliotecas utilizadas no projeto
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

// função de componente de cabeçalho da página, contendo logo e links de direcionamento para
export default function Header () {

    return (
        <Navbar style={{backgroundColor: '#105b63'}} data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home" style={{fontSize: 30}}>  <FaPlus/></Navbar.Brand>
            <Nav className="d-flex">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}