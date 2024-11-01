'use client'

import { Container, Image, Nav, Navbar} from "react-bootstrap";
import { FaInstagram, FaRegUser, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdInfoOutline, MdOutlineEmail } from "react-icons/md";

// imports de bibliotecas utilizadas para criar o componente de rodapé

export default function Footer() {
    return (
        <Navbar style={{backgroundColor: '#105b63'}} data-bs-theme="dark" justfy-content="around"  >
            <Container>
                <Nav defaultActiveKey="/home" className="flex-column" style={{fontSize:10}}>
                    <Image src="/img/transferir.png" width={150} rounded />
                    <p> &copy; 2024 Leia+. Todos os direitos reservados. </p>
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <h5> Redes </h5>
                    <Nav.Link eventKey="link-1">
                        <FaInstagram /> Instagram
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <FaXTwitter /> Twitter/ X
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <FiYoutube /> YouTube
                    </Nav.Link>
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <h5>Contate-nos</h5>
                    <Nav.Link eventKey="link-1">
                        <MdOutlineEmail /> leiamais@123mail.com
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <FaWhatsapp /> (61) 956237845
                    </Nav.Link><br /><br />
                </Nav>      
                <Nav defaultActiveKey="/home" className="flex-column">
                    <h5>Sobre</h5>
                    <Nav.Link eventKey="link-1">
                        <MdInfoOutline /> Informações da empresa
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <FaRegUser /> Equipe 
                    </Nav.Link><br /><br />
                </Nav>
            </Container>
z           </Navbar>
    );
}
