import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
const NavbarComponent = () => {
  return (
    <Navbar style={{ backgroundColor: "#2E5E80" }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            alt=""
            src="src/assets/logo2.png"
            width="100"
            height="60"
            className="d-inline-block align-top me-2"
          />{" "}
          <Nav.Link href="/home"></Nav.Link>
          <span>P.A.U</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>

            <Nav.Link as={Link} to="/resultados">
              Resultados
            </Nav.Link>
          </Nav>
          {/* Apartado de Perfil */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/profile">
              <span>Hola, Camila</span>{" "}
              <CircleUserRound color="white" size={35} />{" "}
              {/* Ícono de usuario */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
