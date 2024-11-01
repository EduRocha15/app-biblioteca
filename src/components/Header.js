'use client'

//imports de bibliotecas utilizadas no projeto
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

// função de componente de cabeçalho da página, contendo logo e links de direcionamento para
export default function Header () {

    return (
        <Navbar style={{backgroundColor: '#105b63'}} data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home" style={{fontSize: 30}}> Ler<FaPlus/></Navbar.Brand>
            <Nav className="d-flex">
                <Nav.Link href="#home"> Autores </Nav.Link>
                <Nav.Link href="#home"> Editoras </Nav.Link>
                <Nav.Link href="#features"> Livros </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    Action </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    Something </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav.Link href="#pricing"> Entrar </Nav.Link>
            </Container>
        </Navbar>
    )
}