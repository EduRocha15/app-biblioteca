'use client'

import {Col, Image, Nav} from "react-bootstrap";

// imports de bibliotecas utilizadas para criar o componente de rodapé

export default function Footer() {
    return (
        <Nav className="justify-content-around bg-primary text-white">
            <Col xs={6} md={4}>
                <img src="../img/logo.png"/>
                <Image src="../img/logo.png" rounded="rounded"/>
            </Col>
            <Nav.Item className="flex-column text-white">
                <Nav.Link >Link</Nav.Link>
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Active</Nav.Link>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Active</Nav.Link>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Active</Nav.Link>
                <Nav.Link >Link</Nav.Link>
                <Nav.Link >Link</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
