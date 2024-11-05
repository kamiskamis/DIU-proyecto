import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a PAU</h1>
      <p className="text-gray-600 mt-4">
        ¡Te damos la bienvenida a PAU, la Plataforma de Ayudantías Unificada!.
        Aquí podrás seleccionar el departamento al cual deseas postular para una
        ayudantía. Explora el menú desplegable para obtener más detalles sobre
        las ayudantías disponibles en cada departamento.
      </p>

      <>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Departamento
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/informatica">
              Informatica
            </Dropdown.Item>
            <Dropdown.Item href="#">Defider</Dropdown.Item>
            <Dropdown.Item href="#">IDP</Dropdown.Item>
            <Dropdown.Item href="#">Quimica</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
};

export default Home;
