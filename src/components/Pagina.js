import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export default function Pagina(props) {
    return (
        <>
            <Header />
            <Container>{props.children}</Container>
            <Footer />
        </>
    );
}