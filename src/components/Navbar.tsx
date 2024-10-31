import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';

const NavbarComponent = () => {
  return (
    <Navbar style={{ backgroundColor: '#2E5E80' }} variant="dark" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">P.A.U</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/about">Acerca</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
        </Nav>
          {/* Apartado de Perfil */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/profile">
              <CircleUserRound color="white" size={24} /> {/* Ícono de usuario */}
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
