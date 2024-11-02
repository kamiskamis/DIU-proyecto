import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

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
          <Dropdown.Item href="#">Informatica</Dropdown.Item>
          <Dropdown.Item href="#">Defider</Dropdown.Item>
          <Dropdown.Item href="#">IDP</Dropdown.Item>
          <Dropdown.Item href="#">Quimica</Dropdown.Item>
        </Dropdown.Menu>

        <Button variant="primary">Buscar</Button>{' '}
      </Dropdown>
    </>
      </div>
      
    );
  };
  
  export default Home;