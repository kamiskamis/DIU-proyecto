import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Página de Inicio</h1>
      <p className="text-gray-600">Bienvenido a nuestra aplicación</p>

      <>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Departamento
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/informatica">
              Informatica
            </Dropdown.Item>

            <Dropdown.Item as={Link} to="/matematicas">
              Matematicas
            </Dropdown.Item>

            <Dropdown.Item as={Link} to="/idp">
              IDP
            </Dropdown.Item>

            <Dropdown.Item as={Link} to="/quimica">
              Quimica
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
};

export default Home;
