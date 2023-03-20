import { Nav, Navbar, Container } from "react-bootstrap";

function Barv() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">Sobre Mi</Nav.Link>
            <Nav.Link href="/projects">Projectos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Barv;