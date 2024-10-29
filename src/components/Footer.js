'use client'

import { Container, Image, Nav, Navbar} from "react-bootstrap";

// imports de bibliotecas utilizadas para criar o componente de rodapé

export default function Footer() {
    return (
        <Navbar style={{backgroundColor: '#105b63'}} data-bs-theme="dark" justfy-content="around">
            <Container>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Image src="/img/transferir.png" width={150} rounded />
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <h5>Contate-nos</h5>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <h5>Contate-nos</h5>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>      
                <Nav defaultActiveKey="/home" className="flex-column">
                    <h5>Sobre</h5>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
                <hr />
            </Container>
            
        </Navbar>
    );
}
